import { Component } from "react";
import { Button, Form } from 'react-bootstrap'


class AddComment extends Component {

    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: this.props.imdbID
        }
    }

    sendComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(this.state.comment),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTJlMmE1ZThiYmM0NTAwMTU2MTBhYTYiLCJpYXQiOjE2MzA0MTU0NTQsImV4cCI6MTYzMTYyNTA1NH0.u9vTfq_WNqwLsjbIIZgyoJItlvNlewthIPo-1r0wx_8"

                }
            })
            if (response.ok) {

                alert('Comment added!')
                window.location.reload()
            } else {
                console.log('error')
                alert('something went wrong')
                window.location.reload()
            }
        } catch (error) {
            console.log('error')
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.sendComment} className='text-center'>
                    <Form.Group>
                        <Form.Label>Comment text</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add your comment"
                            value={this.state.comment.comment}
                            onChange={e => this.setState({
                                comment: {
                                    ...this.state.comment,
                                    comment: e.target.value
                                }
                            })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" value={this.state.comment.rate}
                            onChange={e => this.setState({
                                comment: {
                                    ...this.state.comment,
                                    rate: e.target.value
                                }
                            })}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </div>
        )
    }
}

export default AddComment