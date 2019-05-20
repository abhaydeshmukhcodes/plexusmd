import React,{Component} from 'react';
import banner from '../src/assets/banner.png';
import { Card, Col, Row } from 'antd';
import { Layout} from 'antd';

import './App.css';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import Cards from "./components/Cards/Cards";
import demoData from "../src/components/Constants/demoData"
import MainHeader from "../src/components/Header/MainHeader";
import 'react-sticky-header/styles.css';
const {  Footer ,Header} = Layout;


class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout >
                    <Header style={{ textAlign: 'center' ,border:'4px solid red',backgroundColor:'#20293B',color:'white',position:"sticky"}}>
                        <Button style={{float:'right', marginTop:'10px'}} type="primary">SignIn / SignUp</Button>
                    </Header>
                </Layout>

                <MainHeader/>
                <img src={banner} className="App-logo" alt="mainBanner"/>
                <Row>
                    <Col span={24}>
                        <Row >
                            <div >
                                <Col span={12} style={{padding:'20px 200px '}} >
                                    <h3>PlexusMD Learning</h3>
                                    <p style={{whiteSpace: 'preWrap'}} >
                                        <span style={{color:'red',fontFamily:'sans-serif',fontSize:'20px'}}>1653</span> Subscriber
                                        <span style={{color:'red',fontFamily:'sans-serif',fontSize:'20px'}}>13801</span> Videos
                                        <span style={{color:'red',fontFamily:'sans-serif',fontSize:'20px'}}>9</span> SESSIONS</p>
                                </Col>
                            </div>
                            <Col span={12} style={{padding: '20px 0px'}}>
                                <Button type="primary">SUBSCRIBE</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24} >
                                            <Card  bordered={true} style={{border:'2px solid gray',margin:'20px 200px ',whiteSpace: 'preWrap',textAlign:'left'}}>
                                                PlexusMD Learning engages with senior medical professionals across specialties,
                                                health agencies and medical associations worldwide to bring to you videos
                                                on important topics, latest developments, guidelines and stories of interest.
                                            </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col spna={24} >
                                <p ><span style={{color:'red',fontFamily:'sans-serif',fontSize:'20px'}}>9</span> SESSIONS
                                    <span style={{color:'red',fontFamily:'sans-serif',fontSize:'20px'}}>3</span> HOURS OF VIDEO
                                    <span style={{color:'red',fontFamily:'sans-serif',fontSize:'20px'}}>2</span> CONTRIBUTORS
                                    <span style={{color:'red',fontFamily:'sans-serif',fontSize:'20px'}}>1653</span> SUBSCRIBERS.</p>
                            </Col>
                        </Row>
                    </Col>
                    <h2 >VIDEOS</h2>
                    <Row style={{ padding:'20px 200px'}}>
                        <Col span={8}>
                            <Cards
                                img={demoData.card1.img}
                                header={demoData.card1.header}
                                metaData={demoData.card1.metaData}
                                author={demoData.card1.author}
                            />
                        </Col>
                        <Col span={8}>
                            <Cards
                                img={demoData.card1.img}
                                header={demoData.card1.header}
                                metaData={demoData.card1.metaData}
                                author={demoData.card1.author}
                            />
                        </Col>
                        <Col span={8}>
                            <Cards
                                img={demoData.card1.img}
                                header={demoData.card1.header}
                                metaData={demoData.card1.metaData}
                                author={demoData.card1.author}
                            />
                        </Col>

                    </Row>
                    <Row style={{ padding:'20px 200px'}}>
                        <Col span={8}>
                            <Cards
                                img={demoData.card1.img}
                                header={demoData.card1.header}
                                metaData={demoData.card1.metaData}
                                author={demoData.card1.author}
                            />
                        </Col>
                        <Col span={8}>
                            <Cards
                                img={demoData.card1.img}
                                header={demoData.card1.header}
                                metaData={demoData.card1.metaData}
                                author={demoData.card1.author}
                            />
                        </Col>
                        <Col span={8}>
                            <Cards
                                img={demoData.card1.img}
                                header={demoData.card1.header}
                                metaData={demoData.card1.metaData}
                                author={demoData.card1.author}
                            />
                        </Col>

                    </Row>   <Row style={{ padding:'20px 200px'}}>
                    <Col span={8}>
                        <Cards
                            img={demoData.card1.img}
                            header={demoData.card1.header}
                            metaData={demoData.card1.metaData}
                            author={demoData.card1.author}
                        />
                    </Col>
                    <Col span={8}>
                        <Cards
                            img={demoData.card1.img}
                            header={demoData.card1.header}
                            metaData={demoData.card1.metaData}
                            author={demoData.card1.author}
                        />
                    </Col>
                    <Col span={8}>
                        <Cards
                            img={demoData.card1.img}
                            header={demoData.card1.header}
                            metaData={demoData.card1.metaData}
                            author={demoData.card1.author}
                        />
                    </Col>

                </Row>
                    <Layout>
                        <Footer style={{ textAlign: 'center' ,border:'4px solid red',backgroundColor:'#20293B',color:'white'}}>PlexusMD ©2019 Created by Abhay</Footer>
                    </Layout>

                </Row>

            </div>
        )
    }
}

export default App;
