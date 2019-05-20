import React, {Component} from 'react';
import { Card } from 'antd';

const { Meta } = Card;

class Cards extends Component{
    render(){
        return(
            <Card
                hoverable
                style={{ width: 275 ,borderBlock:'2px solid gray',padding:'10px'}}
                cover={<img alt="example" src={this.props.img} />}
            >
                <Meta title={this.props.header} />
                <p>{this.props.metaData.likes} Likes {this.props.metaData.Views} Views {this.props.metaData.Shares} Shares</p>
                <p>Featuring {this.props.author}</p>
            </Card>
        )
    }
}

export default Cards
