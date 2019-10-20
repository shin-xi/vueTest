<template>
    <div>
        <downExcel :excelData="processData(company, tableData)"/>
        <downExcel :excelData="testData"/>
        <el-button type="primary" @click="getExcel">excel下载get方式</el-button>
    </div>
</template>

<script>
import { CodeToText } from 'element-china-area-data'
import downExcel from './downExcel'
import axios from 'axios'
import { saveAs } from 'file-saver'

export default {
  name: 'excel',
  components: {
    downExcel
  },
  data () {
    return {
      downloadLoading: false,
      company: {
        'id': 1093,
        'cmpyName': '汕头市恒益顺资产托管中心',
        'uniSocialCode': '914405007848707408',
        'legalReptive': '陈伟宁',
        'cmpyPhone': '88891738',
        'cmpyAddr': '汕头市丽水庄中区珠华工业区3幢东侧附楼3楼',
        'annuReptPhone': '88891738',
        'annuReptAddr': '汕头市丽水庄中区珠华工业区3幢东侧附楼3楼',
        'dataStatus': 2,
        'dataQuality': 5
      },
      tableData: [
        {
          'id': 4426,
          'itemType': -1,
          'trdType': 1,
          'infoTitle': '番禺市大石珍宝海鲜楼等13户44笔债权',
          'packCount': -1,
          'infoId': '0c62dbbcf490bd82225e8487087ed337',
          'infoSource': '-1',
          'infoWebsite': '-1',
          'infoUrl': 'http://cl.wenshengamc.com/#/Detail/1/1/0c62dbbcf490bd82225e8487087ed337',
          'trdProvince': '440000',
          'trdCity': '440100',
          'trdAmountOrig': '9401.7万元',
          'trdAmount': -1,
          'baseAmount': -1,
          'interestAmount': -1,
          'totalAmount': 94017000,
          'trdStatus': 0,
          'trdDate': '1899-12-31T06:00:00.000+0000',
          'infoTime': '2017-08-03T16:00:00.000+0000',
          'notes': '-1',
          'buyerType': 2,
          'buyerId': 872,
          'sellerType': -1,
          'sellerId': 663,
          'trdContactorName': '李先生、于小姐',
          'trdContactorAddr': '020-8396322-8732、8626  广州市越秀区东风中路437号越秀城市广场南塔26、27楼',
          'dataStatus': null,
          'dataQuality': null,
          'sellerName': '广州农村商业银行股份有限公司羊城支行'
        },
        {
          'id': 4427,
          'itemType': -1,
          'trdType': 1,
          'infoTitle': '佛山市高明金富雅家具有限公司等6户债权',
          'packCount': -1,
          'infoId': '11367ac351ac3358d2947488ecdd0a1d',
          'infoSource': '-1',
          'infoWebsite': '-1',
          'infoUrl': 'http://cl.wenshengamc.com/#/Detail/2/1/11367ac351ac3358d2947488ecdd0a1d',
          'trdProvince': '440000',
          'trdCity': '440600',
          'trdAmountOrig': '2.2亿元',
          'trdAmount': -1,
          'baseAmount': -1,
          'interestAmount': -1,
          'totalAmount': 220000000,
          'trdStatus': 0,
          'trdDate': '1899-12-31T06:00:00.000+0000',
          'infoTime': '2017-11-29T16:00:00.000+0000',
          'notes': '-1',
          'buyerType': 2,
          'buyerId': 872,
          'sellerType': -1,
          'sellerId': 664,
          'trdContactorName': '苗小姐',
          'trdContactorAddr': '020-83963222-8636  广州市越秀区东风中路437号越秀城市广场南塔26、27楼',
          'dataStatus': null,
          'dataQuality': null,
          'sellerName': '广东粤信融资租赁有限公司'
        }
      ],
      testData: [
        ['#', '公告名称', '公告时间', '投资类型', '出让方', '本金(元)', '利息(元)', '本息合计(元)', '投资地区', '联系人', '联系方式'],
        ['', '不良资产包 23个\n单体项目 34个\n单体项目 34个\n单体项目 34个\n单体项目 34个', '不良资产包 23个\n单体项目 34个'],
        ['', '不良资产包 23个\n单体项目 34个\n单体项目 34个\n单体项目 34个\n单体项目 34个', '不良资产包 23个\n单体项目 34个']
      ]
    }
  },
  methods: {
    codeToText (pro, ct) {
      let text = ''
      if (pro && pro !== '-1') {
        text += CodeToText[pro]
      }
      if (ct && ct !== '-1') {
        text += CodeToText[ct]
      }
      return text
    },
    getType (i) {
      const type = {
        1: '不良资产包',
        2: '单体项目',
        3: '实物资产'
      }
      return type[i]
    },
    processData (company, tableData) {
      const data = [
        ['法定代表人', company.legalReptive, '统一社会信用代码', company.uniSocialCode, '', '', '', '', '', '', ''],
        ['注册联系方式', company.cmpyPhone, '注册联系地址', company.cmpyAddr],
        ['年报联系方式', company.annuReptPhone, '年报联系地址', company.annuReptAddr],
        Array(11).fill(''),
        ['#', '公告名称', '公告时间', '投资类型', '出让方', '本金(元)', '利息(元)', '本息合计(元)', '投资地区', '联系人', '联系方式']
      ]

      tableData.forEach(v => {
        data.push([
          v.id,
          v.infoTitle,
          v.infoTime.split('T')[0],
          this.getType(v.trdType),
          v.sellerName,
          +v.baseAmount > 0 ? v.baseAmount : '',
          +v.interestAmount > 0 ? v.interestAmount : '',
          +v.totalAmount > 0 ? v.totalAmount : '',
          this.codeToText(v.trdProvince, v.trdCity),
          v.trdContactorName,
          v.trdContactorAddr
        ])
      })
      // console.log(data)
      return data
    },
    getExcel () {
      // get 方式ok
      // window.open('http://localhost:3000/getExcel', '_blank')
      axios({
        method: 'post',
        url: 'http://localhost:3000/getExcel',
        responseType: 'blob'
      }).then(res => {
        console.log(res)
        saveAs(new Blob([res.data], { type: res.headers['content-type'] }), 'demo.xlsx')
        // saveAs('http://localhost:3000/getExcel')
        // const file = new File([res.data], 'demo.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
        // saveAs(file)
      })
    }
  }
}
</script>

<style scoped>

</style>
