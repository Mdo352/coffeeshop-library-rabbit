import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleItem, updateSingleItem } from '../actions';
import { shared } from '../constants';

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
`;

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px auto;
    max-width: 30%;
    text-align: center;
`;

const Fieldset = styled.fieldset.attrs({
    className: 'form-control',
})`
    border-color: transparent;
    margin: 1em auto 0.5em;
    max-width: 50%;
    min-height: 6em;
`;

const DayInput = styled.input.attrs({
    className: '',
})`
    margin: 5px auto;
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

class ItemUpdate extends Component {
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
            _id: '',
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

    componentDidMount() {
        this.props.fetchSingleItem(this.props.itemId)
            .then(resp => {
                const { item } = resp.data;
                this.setState({ ...item });
                console.log(this.state);
            });
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
        const copies = event.target.value;
        this.setState({ copies });
    }
    handleChangeInputAvailable = async event => {
        const available = event.target.value;
        this.setState({ available });
    }

    // handleChangeDays = async event => {
    //     const { checked } = event.target;
    //     const { dayIndex } = event.target.dataset;
    //     const { daysOfWeek } = this.state;
    //     const { DAYS_OF_WEEK } = shared;

    //     if (checked && !daysOfWeek[dayIndex]) {
    //         daysOfWeek[dayIndex] = DAYS_OF_WEEK[dayIndex];
    //     } else if (!checked && daysOfWeek[dayIndex]) {
    //         delete daysOfWeek[dayIndex];
    //     }
    //     this.setState({ daysOfWeek: daysOfWeek });
    // }

    // handleChangeInputTimeframe = async event => {
    //     const timeframeNote = event.target.value;
    //     this.setState({ timeframeNote });
    // }

    // handleChangeInputPriority = async event => {
    //     const priority = event.target.validity.valid
    //         ? event.target.value
    //         : this.state.priority;

    //     this.setState({ priority });
    // }

    // handleChangeInputContent = async event => {
    //     const content = event.target.value;
    //     this.setState({ content });
    // }

    handleUpdateItem = event => {
        const {
            _id,
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
            _id,
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

        return this.props.updateSingleItem(item)
            .then(resp => {
                console.log("handleUpdateItem: resp");
                console.log(resp);
                if (typeof resp === "object" && (resp.status < 300 && resp.status >= 200)) {
                    window.alert('Item updated successfully');
                    return true;
                } else {
                    throw resp;
                }
            })
            .catch(err => {
                window.alert(`There was an error updating the item... :(`);
                console.error("handleUpdateItem: err");
                console.error(err);
            });
    }

    confirmUpdateItem = event => {
        if (window.confirm(`Are you sure you want to update this item? ${this.state._id}`)) {
            return this.handleUpdateItem(event);
        }
    }

    render() {
        const {
            _id,
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

        return _id && (
            <Wrapper>
                <Title>Update Item</Title>

                <Label>ISBN: </Label>
                <InputText
                    type="text"
                    placeholder={isbn}
                    value={isbn}
                    onChange={this.handleChangeInputISBN}
                    required
                />

                <Label>Title: </Label>
                <InputText
                    type="text"
                    placeholder={title}
                    value={title}
                    onChange={this.handleChangeInputTitle}
                    required
                />

                <Label>Author: </Label>
                <InputText
                    type="text"
                    value={author}
                    placeholder={author}
                    onChange={this.handleChangeInputAuthor}
                />

                <Label>Publication Year: </Label>
                <InputText
                    type="text"
                    value={publication_year}
                    placeholder={publication_year}
                    onChange={this.handleChangeInputYear}
                />

                <Label>Publisher: </Label>
                <InputText
                    type="text"
                    value={publisher}
                    placeholder={publisher}
                    onChange={this.handleChangeInputPublisher}
                />

                <Label>Image URL (Small): </Label>
                <InputText
                    type="text"
                    value={image_url_small}
                    placeholder={image_url_small}
                    onChange={this.handleChangeInputImageSmall}
                />

                <Label>Image URL (Medium): </Label>
                <InputText
                    type="text"
                    value={image_url_med}
                    placeholder={image_url_med}
                    onChange={this.handleChangeInputImageMed}
                />

                <Label>Image URL (Large): </Label>
                <InputText
                    type="text"
                    value={image_url_large}
                    placeholder={image_url_large}
                    onChange={this.handleChangeInputImageLarge}
                />

                <Label>Copies: </Label>
                <InputText
                    type="number"
                    step="1"
                    lang="en-US"
                    min="0"
                    max="1000"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={copies}
                    onChange={this.handleChangeInputCopies}
                />

                <Label>Available: </Label>
                <InputText
                    type="number"
                    step='1'
                    lang='en-us'
                    min='0'
                    max='1000'
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={available}
                    onChange={this.handleChangeInputAvailable}
                />

                <Button onClick={this.confirmUpdateItem}>Update Item</Button>
                <CancelButton href={'/items/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ...state,
        itemId: ownProps.match.params.id,
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchSingleItem, updateSingleItem }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemUpdate);
