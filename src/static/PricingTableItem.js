import React from 'react';

import Button from '../common/Button/Button';

import style from './PricingTableItem.module.scss';

class PricingTableItem extends React.Component {

  render() {
    const classes = [style.PricingTableItem];

    if (this.props.bordered) {
      classes.push(style.PricingTableItem__bordered);
    }

    if (this.props.large) {
      classes.push(style.PricingTableItem__large)
    }

    return (
      <div className={classes.join(' ')}>
        {this.props.label &&
        <span className={style.PricingTableItem_label}>
                    {this.props.label}
                </span>
        }
        <div className={style.PricingTableItem_top}>
          {this.props.planName &&
          <h3 className={style.PricingTableItem_title}>
            {this.props.planName}
          </h3>
          }
          <p className={style.PricingTableItem_priceText}>
            {this.props.normalPrice &&
            <span className={style.PricingTableItem_oldPrice}>
                            {this.props.normalPrice}
                        </span>
            }
            {this.props.promoPrice &&
            <span className={style.PricingTableItem_price}>
                            {this.props.promoPrice}
                        </span>
            }
            {this.props.billed &&
            <span className={style.PricingTableItem_billed}>
                            {this.props.billed}
                        </span>
            }
          </p>
          {this.props.promoText &&
          <p className={style.PricingTableItem_promoText}>
            {this.props.promoText}
          </p>
          }
        </div>
        {this.props.bulletList &&
        <ul className={style.PricingTableItem_list}>
          {this.props.bulletList.map((el, index) => (
            <li
              className={style.PricingTableItem_list_item}
              key={index}
            >{el}</li>
          ))}
        </ul>
        }
        <div className={style.PricingTableItem_bottom}>
          {this.props.buttonText &&
          <Button
            classes={[style.PricingTableItem_button]}
            variant='primary'
            clicked={this.props.onClick}>
            {this.props.buttonText}
          </Button>
          }
        </div>
      </div>
    );
  }
}

export default PricingTableItem;