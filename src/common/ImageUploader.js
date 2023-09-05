import React from 'react';

import ImageUploading from "react-images-uploading";

import AddMoreButton from './AddMoreButton/AddMoreButton';

import cloudOrange from '../assets/img/icons-new-design/cloud--orange.svg';
import uploadGray from '../assets/img/icons-new-design/upload--gray.svg';
import removeGray from '../assets/img/icons-new-design/remove--gray.svg';
import style from './ImageUploader.module.scss';

class ImageUploader extends React.Component {
    render() {
        const classes = [style.ImageUploader];

        if(this.props.className) {
            classes.push(this.props.className);
        }
        
        let uploadBtnLabel = '';

        if(this.props.acceptType) {
            uploadBtnLabel += this.props.acceptType.join(',');
        }
        if(this.props.maxFileSize) {
            uploadBtnLabel += ` (max size ${this.props.maxFileSize})`;
        }
        return(
            <div className={classes.join(' ')}>
                {this.props.label &&
                <p className={style.ImageUploader_label}>{this.props.label}</p>
                }
                <ImageUploading
                    multiple
                    value={this.props.images}
                    onChange={this.props.onChange}
                    maxNumber={this.props.maxNumber}
                    maxFileSize={this.props.maxFileSize}
                    acceptType={this.props.acceptType}
                    dataURLKey="data_url"
                >
                    {({
                    imageList,
                    onImageUpload,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                    }) => (
                    <div className={style.ImageUploader_wrapper}>
                        {imageList.length > 0 ? null : (
                            <button
                            className={isDragging ? [style.ImageUploader_uploadBtn, style.ImageUploader_uploadBtn__dragging].join(' ') : style.ImageUploader_uploadBtn}
                            onClick={onImageUpload}
                            {...dragProps}
                            >
                                <div className={style.ImageUploader_uploadBtn_wrapper}>
                                    <div className={style.ImageUploader_uploadBtn_circle}>
                                        <img 
                                        src={cloudOrange}
                                        className={style.ImageUploader_uploadBtn_icon}
                                        />
                                    </div>
                                    <span className={style.ImageUploader_uploadBtn_name}>Upload</span>
                                    <span className={style.ImageUploader_uploadBtn_label}>{uploadBtnLabel}</span>
                                </div>
                            </button>
                        )}
                        {imageList.map((image, index) => (
                            <div key={index} className={style.ImageUploader_item}>
                                <img src={image.data_url} alt="" className={style.ImageUploader_item_img} />
                                <p className={style.ImageUploader_item_name}>{image.file.name}</p>
                                <div className={style.ImageUploader_item_btns}>
                                    <button onClick={() => onImageUpdate(index)} className={style.ImageUploader_item_btn}>
                                        <img
                                        src={uploadGray}
                                        />
                                    </button>
                                    <button onClick={() => onImageRemove(index)} className={style.ImageUploader_item_btn}>
                                        <img
                                        src={removeGray}
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                        {this.props.multiple && imageList.length > 0 ? (
                            <AddMoreButton
                            onClick={onImageUpload} 
                            additionalProps={{...dragProps}}
                            className={style.ImageUploader_addMoreButton}
                            >
                                +Add more
                            </AddMoreButton>
                        ) : null}
                    </div>
                    )}             
                </ImageUploading>
            </div>
        )

    }
}

export default ImageUploader;