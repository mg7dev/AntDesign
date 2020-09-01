import React from 'react';
import { Progress, Row ,Col, Typography, Image } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;

const LeftTab  = () =>{
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
        {title:'this',url:'https://drscdn.500px.org/photo/1010224409/q%3D80_m%3D1500/v2?sig=49915d065cc5126ff7faa839fb63e0d243ace9b2660e1b8c19ff59c194e9082d'},
        {title:'is',url:'https://drscdn.500px.org/photo/1010224409/q%3D80_m%3D1500/v2?sig=49915d065cc5126ff7faa839fb63e0d243ace9b2660e1b8c19ff59c194e9082d'},
        {title:'dumy',url:'https://drscdn.500px.org/photo/1010224409/q%3D80_m%3D1500/v2?sig=49915d065cc5126ff7faa839fb63e0d243ace9b2660e1b8c19ff59c194e9082d'},
        {title:'camera',url:'https://drscdn.500px.org/photo/1010224409/q%3D80_m%3D1500/v2?sig=49915d065cc5126ff7faa839fb63e0d243ace9b2660e1b8c19ff59c194e9082d'},
        {title:'data',url:'https://drscdn.500px.org/photo/1010224409/q%3D80_m%3D1500/v2?sig=49915d065cc5126ff7faa839fb63e0d243ace9b2660e1b8c19ff59c194e9082d'},
        {title:'image',url:'https://drscdn.500px.org/photo/1010224409/q%3D80_m%3D1500/v2?sig=49915d065cc5126ff7faa839fb63e0d243ace9b2660e1b8c19ff59c194e9082d'},
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
    </>
    );
}
export default LeftTab;


