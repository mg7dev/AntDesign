import React from 'react';
import { Progress, Row ,Col, Typography, } from 'antd';
import { Card } from 'antd';
import CountUp from 'react-countup';

const { Meta } = Card;

const RightTab  = () =>{
    const circleprogress = [
        {percent:21,strokeColor:'red',text:'progress1'},
        {percent:69,strokeColor:'blue',text:'progress2'},
        {percent:32,strokeColor:'green',text:'progress3'}
    ]
    const lineprogress = [
        {title:'this',number:343234,percent:12},
        {title:'is',number:3213,percent:99},
        {title:'dummy',number:67856,percent:23},
        {title:'data',number:564546,percent:12},
        {title:'in',number:1564523,percent:34},
        {title:'front',number:564546,percent:12},
        {title:'end',number:1256453,percent:98},
    ]
    const camera = [
        {title:'this',url:'https://media.giphy.com/media/8FNlmNPDTo2wE/giphy.gif'},
        {title:'is',url:'https://media.giphy.com/media/oimCQlndn6KPe/giphy.gif'},
        {title:'dumy',url:'https://media.giphy.com/media/d49xYJytaoM4RJIc/giphy.gif'},
        {title:'camera',url:'https://media.giphy.com/media/l2YWpf1EMidre0PHa/giphy.gif'},
        {title:'data',url:'https://media.giphy.com/media/IPbS5R4fSUl5S/giphy.gif'},
        {title:'image',url:'https://media.giphy.com/media/a8749TBnyEIY8/giphy.gif'},
    ]
    return (
    <>
        <Row style={{textAlign:'center',color:'white'}}>
            <Col span={24}>
               <Typography  style={{background:'#000f60',marginBottom:20,margin:'10px',color:'white'}}>
                   TRAFIC INDEX
               </Typography>
            </Col>
            {
                circleprogress.map((item,index)=>{
                    return(
                        <Col lg={8}>
                            <Progress 
                                strokeLinecap="square"  
                                type="circle" 
                                width={70} 
                                trailColor={'#000f60'}
                                strokeColor={item.strokeColor} 
                                strokeWidth={12} 
                                percent={item.percent} />
                            {item.text}
                        </Col>
                    )
                })
            }
        </Row>
        <Row style={{textAlign:'center',color:'white'}}>
            <Col span={24}>
               <Typography  style={{background:'#000f60',marginBottom:20,margin:'10px',color:'white'}}>
                   TRAFIC SITUATION
               </Typography>
            </Col>
            {
                lineprogress.map((item)=>{
                    return(
                        <Col span={24} style={{display:'inline-flex'}}>
                            <span style={{width:'100px',textAlign:'right',padding:'1px 5px '}}>
                                {item.title}
                            </span>
                            <Progress 
                                strokeLinecap="square" 
                                percent={item.percent} 
                                trailColor={'#000f60'}
                                showInfo={false}/>
                            <span style={{width:'100px',textAlign:'left',padding:'1px 5px '}}>
                                {item.number}
                            </span>
                        </Col> 
                    )
                })
            }
        </Row>
        <Row style={{textAlign:'center',color:'white'}}>
            <Col span={24}>
               <Typography  style={{background:'#000f60',marginBottom:20,margin:'10px',color:'white'}}>
                   TRAFIC MONITORS
               </Typography>
            </Col>
            {
                camera.map((item)=>{
                    return(
                        <Col span={12}>
                            <Card hoverable
                                style={{margin:5}}
                                cover={<img alt="example" src={item.url} style={{ height:100}} />}
                            >
                                <Meta style={{padding:0}} description={item.title}/>
                            </Card>
                        </Col> 
                    )
                })
            }
        </Row>
    </>
    );
}
export default RightTab;


