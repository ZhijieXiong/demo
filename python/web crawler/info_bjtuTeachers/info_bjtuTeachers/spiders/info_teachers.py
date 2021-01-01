# -*- coding: utf-8 -*-
import scrapy
import re


class InfoTeachersSpider(scrapy.Spider):
    name = 'info_teachers'
    allowed_domains = ['gsdb.bjtu.edu.cn/discipline/college_show']
    start_urls = ['http://gsdb.bjtu.edu.cn/discipline/college_show/']
    # info = {}

    def parse_institute(self, response):
        teacherDic = {}  
        teachers_name = response.xpath("//td/a/text()").getall()
        teachers_name = list(map(lambda str: str.replace('\xa0', '', 4), teachers_name))
        new_teachers_name = []
        teachers_url = response.xpath("//td/a/@href").getall()
        for i in range(len(teachers_url)):
            if (teachers_url[i].find("http") != -1):
                teacherDic.setdefault(teachers_name[i], teachers_url[i])
                new_teachers_name.append(teachers_name[i])
        if (teacherDic):
            # self.info[response.meta["institute_name"]] = self.info[response.meta["institute_name"]].fromkeys(new_teachers_name, {})
            for key in teacherDic:
                yield scrapy.Request(teacherDic.get(key), callback=self.parse_teacher, dont_filter=True, meta={"institute_name": response.meta["institute_name"], 'teacher_name': key}) 

    def parse_teacher(self, response):
        if (response.xpath('//div[@class="mainleft_box"]/h4/text()').getall()[0] == "暂未发布"):
            pass
        teacher_info = {}
        teacher_info.setdefault("老师", response.meta["teacher_name"])
        teacher_info.setdefault("学院", response.meta["institute_name"])
        info_title = response.xpath('//div[@class="mainleft_box"]/h4/text()').getall()
        all_info = response.xpath('//div[@class="mainleft_box"]').getall()
        for i in range(len(info_title)):
            if (info_title[i] == "基本信息"):
                info1 = re.findall(">(.+)<", all_info[i]) 
            elif (info_title[i] == "研究方向"):
                info2 = re.findall(">(.+)<", all_info[i]) 
            elif (info_title[i] == "招生专业"):
                info3 = re.findall(">(.+)<", all_info[i]) 
            elif (info_title[i] == "科研项目"): 
                info4 = list(map(lambda str:str.strip(), re.findall("<li>(\s*.+\s*)</li>", all_info[i])))
            elif (info_title[i] == "论文/期刊"):
                info5 = list(map(lambda str:str.strip(), re.findall("<li>(\s*.+\s*)</li>", all_info[i])))
            else:
                pass
        teacher_info.setdefault(info1[0], [info1[1], info1[2], info1[3]])
        info22 = []
        for i in range(len(info2)):
            if (i != 0):
                info22.append(info2[i])
        teacher_info.setdefault(info2[0], info22)
        info33 = []
        for i in range(len(info3)):
            if (i != 0):
                info33.append(info3[i])
        teacher_info.setdefault(info3[0], info33)
        teacher_info.setdefault("科研项目", info4)
        teacher_info.setdefault("论文/期刊", info5)
        return teacher_info
        # self.info[response.meta["institute_name"]][response.meta["teacher_name"]] = teacher_info
        # print(self.info)

    def parse(self, response):
        instituteLinkDic = {}
        instituteLinkList = response.xpath("//td/a/@href").getall()  # 每个学院链接
        instituteNameList = response.xpath("//td/a/text()").getall()  # 每个学院名字
        for i in range(len(instituteLinkList)):
            instituteLinkDic.setdefault(instituteNameList[i], instituteLinkList[i].replace('../', "http://gsdb.bjtu.edu.cn/discipline/" , 1))
        # self.info = self.info.fromkeys(instituteNameList, {})
        for key in instituteLinkDic:
            yield scrapy.Request(instituteLinkDic.get(key), callback=self.parse_institute, dont_filter=True, meta={"institute_name": key})


        
