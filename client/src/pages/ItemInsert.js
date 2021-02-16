import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { insertSingleItem } from '../actions';
// import { shared } from '../constants';

import styled from 'styled-components';

const Title = styled.h1.attrs({
    className: 'h1',
})``;

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin-top: 0 30px;
`;

const Label = styled.label`
    margin: 5px;
    max-width: 30%;
    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px auto;
    max-width: 30%;
    text-align: center;
    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
`;

const Fieldset = styled.fieldset.attrs({
    className: 'form-control',
})`
    background-color: transparent;
    border-color: transparent;
    margin: 1em auto 0.5em;
    max-width: 50%;
    min-height: 6em;
    @media screen and (max-width: 420px) {
        height: auto;
        max-width: 75%;
    }
`;

const DayInput = styled.input.attrs({
    className: '',
})`
    margin: 5px 5px 5px auto;
    text-align: center;
`;

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger',
})`
  margin: 15px 15px 15px 5px;
`;

class ItemInsert extends Component {
    constructor(props) {
        /**
         * Currently deprecated and now known as the "legacy context":
         * - https://reactjs.org/docs/legacy-context.html
         *
         * TODO: refactor to use new Context API:
         * - https://reactjs.org/docs/context.html
         */
        super(props);
        this.state = {
            ISBN: '',
            title: '',
            author: '',
            year: '',
            publisher: '',
            image_url_small: '',
            image_url_med: '',
            image_url_large: '',
            copies: 0,
            isAvailable: 'False',
        };
    }

    handleChangeInputISBN = async event => {
        const ISBN = event.target.value;
        this.setState({ ISBN });
    }
    handleChangeInputTitle = async event => {
        const title = event.target.value;
        this.setState({ title });
    }
    handleChangeInputAuthor = async event => {
        const author = event.target.value;
        this.setState({ author });
    }
    handleChangeInputYear = async event => {
        const year = event.target.value;
        this.setState({ year });
    }
    handleChangeInputPublisher = async event => {
        const publisher = event.target.value;
        this.setState({ publisher });
    }

    handleChangeInputCopies = async event => {
        const copies = event.target.validity.valid
            ? event.target.value
            : this.state.copies;

        this.setState({ copies });
    }

    handleChangeInputIsAvailable = async event => {
        const isAvailable = event.target.value;
        this.setState({ isAvailable });
    }

    handleInsertItem = event => {
        event.preventDefault();

        const {
            ISBN,
            title,
            author,
            year,
            publisher,
            copies,
            isAvailable
        } = this.state;
        const item = { ISBN, title, author, year, publisher, copies, isAvailable };

        this.props.insertSingleItem(item)
            .then(resp => {
                console.log("handleInsertItem: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    window.alert('Item inserted successfully');
                    this.setState({
                        ISBN: '',
                        title: '',
                        author: '',
                        year: '',
                        publisher: '',
                        image_url_small: '',
                        image_url_med: '',
                        image_url_large: '',
                        copies: 0,
                        isAvailable: 'False',
                    });
                } else {
                    throw resp;
                }
            })
            .catch(err => {
                // TODO: pass error object correctly so that things like validation errors can be displayed to user
                window.alert(`There was an error creating the item... :(`);
                console.log("handleInsertItem: err");
                console.log(err);
            })
    }

    render() {
        const {
            ISBN,
            title,
            author,
            year,
            publisher,
            image_url_small,
            image_url_med,
            image_url_large,
            copies,
            isAvailable
        } = this.state;

        // const { DAYS_OF_WEEK } = shared;

        return (
            <Wrapper>
                <Title>Add New Book</Title>

                <Label>ISBN: </Label>
                <InputText
                    type="text"
                    value={ISBN}
                    onChange={this.handleChangeInputISBN}
                />

                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />
                <Label>Author: </Label>
                <InputText
                    type="text"
                    value={author}
                    onChange={this.handleChangeInputAuthor}
                />

                <Label>Year: </Label>
                <InputText
                    type="text"
                    value={year}
                    onChange={this.handleChangeInputYear}
                />

                <Label>Publisher: </Label>
                <InputText
                    type="text"
                    value={publisher}
                    onChange={this.handleChangeInputPublisher}
                />


                <Label>Copies: </Label>
                <InputText
                    type="number"
                    step="1.0"
                    lang="en-US"
                    min="0"
                    max="1000"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={copies}
                    onChange={this.handleChangeInputCopies}
                />

                <Button onClick={this.handleInsertItem}>Add Item</Button>
                <CancelButton href={'/items/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ insertSingleItem }, dispatch);

export default connect(null, mapDispatchToProps)(ItemInsert);