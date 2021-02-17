import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { insertSingleItem } from '../actions';

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
            isbn: '',
            title: '',
            author: '',
            publication_year: '',
            publisher: '',
            image_url_small: '',
            image_url_med: '',
            image_url_large: '',
            copies: 0,
            available: 0
        };
    }

    handleChangeInputISBN = async event => {
        const isbn = event.target.value;
        this.setState({ isbn });
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
        const publication_year = event.target.value;
        this.setState({ publication_year });
    }
    handleChangeInputPublisher = async event => {
        const publisher = event.target.value;
        this.setState({ publisher });
    }
    handleChangeInputImageSmall = async event => {
        const image_url_small = event.target.value;
        this.setState({ image_url_small });
    }
    handleChangeInputImageMed = async event => {
        const image_url_med = event.target.value;
        this.setState({ image_url_med });
    }
    handleChangeInputImageLarge = async event => {
        const image_url_large = event.target.value;
        this.setState({ image_url_large });
    }

    handleChangeInputCopies = async event => {
        const copies = event.target.validity.valid
            ? event.target.value
            : this.state.copies;

        this.setState({ copies });
    }

    handleChangeInputAvailable = async event => {
        const available = event.target.value;
        this.setState({ available });
    }

    handleInsertItem = event => {
        event.preventDefault();

        const {
            isbn,
            title,
            author,
            publication_year,
            publisher,
            image_url_small,
            image_url_med,
            image_url_large,
            copies,
            available
        } = this.state;
        const item = { 
            isbn,
            title,
            author,
            publication_year,
            publisher,
            image_url_small,
            image_url_med,
            image_url_large,
            copies,
            available
        };

        this.props.insertSingleItem(item)
            .then(resp => {
                console.log("handleInsertItem: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    window.alert('Item inserted successfully');
                    this.setState({
                        isbn: '',
                        title: '',
                        author: '',
                        publication_year: '',
                        publisher: '',
                        image_url_small: '',
                        image_url_med: '',
                        image_url_large: '',
                        copies: 0,
                        available: 0,
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
            isbn,
            title,
            author,
            publication_year,
            publisher,
            image_url_small,
            image_url_med,
            image_url_large,
            copies,
            available
        } = this.state;

        return (
            <Wrapper>
                <Title>Create Item</Title>

                <Label>ISBN: </Label>
                <InputText
                    type="text"
                    value={isbn}
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
                    value={publication_year}
                    onChange={this.handleChangeInputYear}
                />
                <Label>Publisher: </Label>
                <InputText
                    type="text"
                    value={publisher}
                    onChange={this.handleChangeInputPublisher}
                />
                <Label>Image URL (Small): </Label>
                <InputText
                    type="text"
                    value={image_url_small}
                    onChange={this.handleChangeInputImageSmall}
                />
                <Label>Image URL (Medium): </Label>
                <InputText
                    type="text"
                    value={image_url_med}
                    onChange={this.handleChangeInputImageMed}
                />
                <Label>Image URL (Large): </Label>
                <InputText
                    type="text"
                    value={image_url_large}
                    onChange={this.handleChangeInputImageLarge}
                />
                <Label>Copies: </Label>
                <InputText
                    type="text"
                    value={copies}
                    onChange={this.handleChangeInputCopies}
                />
                <Label>Available: </Label>
                <InputText
                    type="text"
                    value={available}
                    onChange={this.handleChangeInputAvailable}
                />

                <Button onClick={this.handleInsertItem}>Add Item</Button>
                <CancelButton href={'/items/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ insertSingleItem }, dispatch);

export default connect(null, mapDispatchToProps)(ItemInsert);
