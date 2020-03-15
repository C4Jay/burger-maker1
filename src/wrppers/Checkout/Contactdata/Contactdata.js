import React, { Component } from 'react';
import Button from '../../../components/UI/button/button'
import clsses from './Contactdata.css'

class ContactData extends Component {

    state = {
        name: '',
        mail: '',
        adrs: {
            strt: '',
            postcode: ''
        }
    }

    sendorderHandler = (event) => {
        event.preventDefault()
        console.log(this.props)

        this.setState({sending: true})

        const createdburger = {
           ingredients: this.props.ingredients,
           /*  price: this.state.totalPrice,
            */ customer: {
                name: this.state.name,
                address: {
                    strt: this.state.adrs.strt,
                    Zip: this.state.adrs.postcode,
                    country: 'Denmark'
                },
                mail: this.state.mail
            },
            delivery: 'cheapest'
            }
        
        axios.post('/orders.json', createdburger)
        .then(response => {
            console.log(response)
            this.setState({sending: false, buying: false})
            this.props.history.push('/checkout')

        }).catch(err => {
            console.log(err)
            this.setState({sending: false, buying: false})

        })


    }

    render () {
        return (
            <div className={clsses.ContactData}>
                <h3>Your contact data</h3>
                <form>
                    <input type="text" name="name" placeholder="your first name"></input>
                    <input type="text" name="mail" placeholder="mail"></input> 
                    <input type="text" name="strt" placeholder="street"></input>
                    <input type="text" name="postcode" placeholder="postCode"></input>
                </form>
                <Button btntype="Success" clicked={this.sendorderHandler}>SEND</Button>
            </div>

        )
    }
}

export default ContactData