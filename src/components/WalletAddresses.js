import React from 'react';
import btc from '../images/crypto-icons/white/btc.svg';
import ltc from '../images/crypto-icons/white/ltc.svg';
import eth from '../images/crypto-icons/white/etc.svg';
import doge from '../images/crypto-icons/white/doge.svg';

export default class WalletAddresses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      copiedWallet: '',
      wallets : [
        {
          name: 'Bitcoin',
          symbol: 'btc',
          icon: btc,
          address: '199Rq8GkKCc2ZmkXM4y3Hz96q5hU2bUnM4'
        },
        {
          name: 'Litecoin',
          symbol: 'ltc',
          icon: ltc,
          address: '3HGv9eLV3EBPG6qSyC2t5bkLjXRWppAC7P'
        },
        {
          name: 'Ethereum',
          symbol: 'etc',
          icon: eth,
          address: '0xeddaa7bbae3c014aef3905453e24845333e49709'
        },
        {
          name: 'Dogecoin',
          symbol: 'doge',
          icon: doge,
          address: 'A6zJuxpb7hC4T4Qs12XmDikgmECDyz7LSE'
        }
      ]
    };
  }

  copyAddressClick(id) {
    let copyText = document.getElementById(id);
    let coinName = copyText.name;

    copyText.select();
    document.execCommand('copy');

    this.setState({
      messageActive: true,
      copiedWallet: coinName
    });

    setTimeout(() => {
      this.setState({
        messageActive: false,
        copiedWallet: ''
      });
    }, 1500)
  }

  render() {
    const wallets = this.state.wallets;

    const walletList = wallets.map((item) => {
      return (
        <li  key={item.symbol}>
          <div className="crypto-asset">
            <img src={item.icon} alt={item.name} />
            <h5>{item.name}</h5>
          </div>
          <div className="input-action">
            <input type="text" name={item.name} defaultValue={item.address} id={item.symbol} />
            <button onClick={() => this.copyAddressClick(item.symbol)} title="Copy">
              <i className="fa fa-clone" aria-hidden="true"></i>
            </button>
          </div>
        </li>
      )
    })

    return (
        <section id="payments-donations">
          <h3 id="message" className={this.state.messageActive ? 'visible' : 'hidden'}>{`${this.state.copiedWallet} Address Copied to Clipboard`}</h3>
          <h2>Payments <span className="thin">&amp;</span> Donations</h2>
          <ul className="no-list crypto-addresses">
            {walletList}
          </ul>
        </section>
    );
  }
}