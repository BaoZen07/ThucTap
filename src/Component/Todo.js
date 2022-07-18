import React, { Component } from 'react'
import { TextField,Typography, Table, TableCell, TableHead, TableRow, Grid, TableBody, Button, ButtonGroup } from '@material-ui/core'


export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      name: "",
      age: 0,
      action: "ADD ITEM",
      items: [
        {
          name: "Ly Tieu Bao", age: 21
        },
        {
          name: "Ly Trong Nam", age: 10
        },
        {
          name: "Ly Bao Bao", age: 17
        },
        {
          name: "Ly Ly", age: 30
        }
      ]

    }
    this.changeName = this.changeName.bind(this);
    this.changeAge = this.changeAge.bind(this);
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  changeAge = (e) => {
    this.setState({
      age: e.target.value
    })
  }

  addItem = () => {
    if (!this.state.items.find(item => item.name === this.state.name)) {
      this.setState({
        items: [
          ...this.state.items,
          {
            name: this.state.name,
            age: this.state.age
          }
        ],
        name: "",
        age: ""
      })
    }
  }

  Edit = (item,index)=>{
    this.setState({
      action:'UPDATE ITEM',
      name:item.name,
      age:item.age,
      index:index
    });
  }
  updateItem = ()=>{
    let data = this.state.items;
    data.map((item,index)=>{
              if(this.state.index===index){
                item.name = this.state.name;
                item.age = parseInt(this.state.age);
              }
    })
    this.setState({
      items:data,
      name:"",
      age:"",
      action:'ADD_ITEM'
   })
    
 }


//   deleteItem=(name)=>this.setState({
//   items:this.state.items.filter(item=>item.name!=name)
// })



  render() {
    return (
      <div>
        <Typography variant="h3" align="center">List Name</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} className="left"  >
            <h1>{this.state.action}</h1>
            <TextField  id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        onChange={this.changeName} value = {this.state.name}
                        />
            
            <TextField id="outlined-basic"
                       label="Age"
                       variant="outlined"
                       onChange={this.changeAge} value = {this.state.age}
                        />
            <div  >
            <Button onClick={this.state.action=='ADD ITEM'?this.addItem:this.updateItem}
                    variant="contained"
            >Add</Button>
            </div>
           

          </Grid>
          <Grid item xs={8} className="right">
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                <TableCell align="center">ID</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Age</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                    this.state.items.map((item,index) => (
                      <TableRow key={index}>
                        <TableCell align="center">{index}</TableCell>
                        <TableCell align="center">{item.name}</TableCell>
                        <TableCell align="center">{item.age}</TableCell>
                        <TableCell align="center">
                          <ButtonGroup >
                            <Button color="primary"
                                    onClick={()=>this.Edit(item,index)}>Update</Button>
                            <Button color="secondary"
                                    onClick={()=>this.deleteItem(item,name)} >Delete</Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    ))
                }
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </div>
    )
  }
}
