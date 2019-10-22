import React from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage} from 'react-native';
import Header from './app/components/Header';
import Subtitle from './app/components/SubTitle';
import Input from './app/components/InputBox';
import TodoItem from './app/components/TodoItem';
import { stringify } from 'qs';

export default class App extends React.Component {
  constructor(props){
    super(props); //상속받는 부모 class의 속성도 받아오는거에요
    this.state={
      inputValue: "",
      todos:[]
    }
  }

  componentWillMount(){
    this.getData()
  }
  storeData = ()=>{
    AsyncStorage.setItem('@todo:state', JSON.stringify(this.state))
  }

  getData = ()=>{
    AsyncStorage.getItem('@todo:state').then((state)=>{
      if(state!==null){
        this.setState(JSON.parse(state));
      }
    }

    )
  }
  _makeTodoItem = ({item, index}) => {
    return (
      <TodoItem
       text={item.title}

       isComplete={item.iscomplete}
       changeComplete={()=>{
         const newTodo = [...this.state.todos]
         newTodo[index].iscomplete = !newTodo[index].isComplete
         this.setState({todos:newTodo},this.storeData)
       }}

       deleteItem={() =>{
         const newTodo = [...this.state.todos]
         newTodo.splice(index,1)
         this.setState({todos: newTodo}),this.storeData
       }}/>
    );
  }
  _changeText = (value) => {
    this.setState({inputValue: value});
  }

  _addTodoItem = () => {
    if(this.state.inputValue != ''){
      const prevTodo = this.state.todos;

      const newTodo = { title: this.state.inputValue, iscomplete: false};

      this.setState({
        inputValue: '',
        todos: prevTodo.concat(newTodo)
      }),this.storeData
    }
  }
  render() {
    return (
    <View style={styles.container}>
      <View style={styles.headercenter}>
        
        <Header />
        
        </View>
        
        <View style={styles.subtitleposition}>
        
          <Subtitle title="해야 할 일"/>
          <Input 
            value = {this.state.inputValue}
            changeText={this._changeText}
            addTodo={this._addTodoItem}/>
          {/* <Input/> */}
        
        </View>
         
          <View style={styles.subtitleposition}>
        
            <Subtitle title="해야 할 일 목록" />
            

            <FlatList
            data={this.state.todos}
            renderItem={this._makeTodoItem}
            keyExtractor={(item, index) => {return '${index}'}}/>
        
          </View>
        </View>
            );
          }
        }
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
          },
          headercentered : {
            alignItems : 'center',
          },
          subcontainer : {
            marginLeft:20,
          }
        });
      
