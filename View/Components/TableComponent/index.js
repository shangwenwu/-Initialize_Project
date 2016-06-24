import React from 'react'
import {
  Link
} from 'react-router'

//改变table数据
// changeData(key, val) {

// }

//  var tableOption = {
//         head: [{
//             field: 'item_id',
//             text: '编号1111'
//         }, {
//             field: 'class1_name',
//             text: '一级分类名称'
//         }, {
//             field: 'sku_name',
//             text: '产品名称'
//         }, {
//             field: 'own_brand',
//             text: '品牌12122121'
//         }, {
//             field: 'sku_level_name',
//             text: '等级'
//         }, {
//             field: 'sku_format',
//             text: '规格'
//         }, {
//             field: 'valuation_unit_name',
//             text: '计价单位'
//         }, {
//             field: 'status',
//             text: '状态'
//         }, {
//             field: 'handle',
//             text: '操作',
//             callback: function(item) {
//                 if (item.status == 9) {
//                     return (<button type="button" className="btn btn-success">驳回</button>)
//                 } else {
//                     return (<button type="button" onClick={t.DialogView.bind(t)} className="btn btn-success">查看</button>)
//                 }
//             }
//         }],
//         data: t.productList.data,
//     }
// <TableComponent params={tableOption} changeData={this.changeData.bind(this)}/>

class TableComponent extends React.Component {
  getPageNum(num) {
    return () => {
      this.props.changeData('page', num)
    }
  }
  render() {
    var params = this.props.params,
      head = [],
      rows = [],
      page = [];
    // page_total
    // page

    var startPage = (Math.ceil(params.data.page / 10) - 1) * 10 + 1;
    for (var i = startPage; i < startPage + 10; i++) {
      if (i > Number(params.data.page_total)) {
        break;
      }
      if (params.data.page == i) {
        console.log(params.data.page);
        page.push(<li key={i} className="active"><a href="javascript:void(0)">{i}</a></li>);
      } else {
        page.push(<li key={i} onClick={this.getPageNum(i)} ><a href="javascript:void(0)">{i}</a></li>);
      }
    }
    params.head.map(function(item, key) {
      head.push(<th key={key}>{item.text}</th>);
    });
    if (params.data.rows) {
      params.data.rows.map(function(item, index) {
        var tdArr = [];
        params.head.map(function(con, k) {
          if (con.callback) {
            var result = con.callback(item);
            tdArr.push(<td key={k}>{result}</td>);
          } else {
            tdArr.push(<td key={k}>{item[con.field]}</td>);
          }
        });
        rows.push(<tr key={index}>{tdArr}</tr>);
      });
    }
    return (
      <div>
                <table className="table table-hover  table-striped">
                          <thead><tr>{head}</tr></thead>
                          <tbody>{rows}</tbody>
                </table>

                <nav style={{textAlign:'center',marginTop:'-20px'}}>
                      <ul className="pagination">
                          <li 
                              className={1 == Number(params.data.page) && "disabled"} 
                              onClick={1 < Number(params.data.page) ? ()=>this.props.changeData('page',Number(params.data.page)-1) : ()=>{} }>
                                  <a href="javascript:void(0)" aria-label="Previous">
                                      <span aria-hidden="true">«</span>
                                  </a>
                          </li>
                          {page}
                          <li 
                              className={Number(params.data.page_total) == Number(params.data.page) && "disabled"} 
                              onClick={Number(params.data.page_total) > Number(params.data.page) ? ()=>this.props.changeData('page',Number(params.data.page)+1) : ()=>{} }>
                                  <a href="javascript:void(0)" aria-label="Next">
                                      <span aria-hidden="true">»</span>
                                  </a>
                          </li>
                     </ul>
                </nav>

            </div>
    )
  }
}

module.exports = TableComponent