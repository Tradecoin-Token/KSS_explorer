import React from 'react';

const socialLinks = [{
    id: 'github',
    url: 'https://github.com/Krosscoin'
}, {
    id: 'twitter',
    url: 'https://twitter.com/krosscoin_team'
}, {
    id: 'facebook',
    url: 'https://facebook.com/krosscoin'
}, {
    id: 'discord',
    url: 'https://discord.gg/QJEHU5e2'
}, {
    id: 'telegram',
    url: 'https://telegram.me/krosscoin_KSS'
}, {
    id: 'reddit',
    url: 'https://www.reddit.com/user/Krosscoin_team/'
}];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version</div>
            <div>KSS Team</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="http://68.183.110.222:60863" target="_blank">KSSWALLET</a>
            </div>
        </div>
    );
}

export default Footer;
