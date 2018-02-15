import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick';
import { selectedGallery, clearSelectedGallery } from '../action';

const setting = {
    dots: true,
    infinite: true,
    arrow: false,
    speed: 500
}

class Gallery extends Component {

    componentDidMount() {
        this.props.selectedGallery(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearSelectedGallery();
    }

    renderSlider = ({ selected }) => {
        if (selected) {
            // console.log(selected)
            const gallery = selected[0];
            return (
                <div>
                    <h3>The best of {gallery.artist}</h3>
                    <Slider {...setting}>
                        {gallery.images.map((item, index) => {
                            return (
                                <div key={index} className="slide-item">
                                    <div>
                                        <div className="image" style={{ background: `url(/images/galleries/${item.img})` }}></div>
                                        <div className="discription">
                                            <span>{item.desc}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="slide-item-wrap">
                {this.renderSlider(this.props.galleries)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        galleries: state.galleries
    }
}

function mapDispatchToPtops(dispatch) {
    return bindActionCreators({ selectedGallery, clearSelectedGallery }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToPtops)(Gallery);