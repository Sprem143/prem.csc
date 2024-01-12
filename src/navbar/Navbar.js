import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <nav>
                {/* nav1 */}
                <div className="nav1">
                    {/* logo */}
                    <div className="logo"><img src="https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/300782630_178231121343304_3594189052520872915_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=FFg6NT__1m8AX-p1iz_&_nc_ht=scontent.fdel1-2.fna&oh=00_AfCtvbnIFEMKB2-fP5G2_21M1GJ4Jem6os_UV8H1yAzXxg&oe=65A678FC" alt="" height='70' /></div>
                    {/* page links */}
                    <div className="links">
                        <div className="link"><a href="">Home</a></div>
                        <div className="link"><a href="">Contact</a></div>
                        <div className="link"><a href="">Services</a></div>
                        <div className="link"><a href="">Location</a></div>
                        <div className="link"><a href="">About</a></div>
                        <div className="link"><a href="">Useful Links</a></div>
                </div>
                <div className='account'>
                    <a href=""><img src="https://scontent.fdel1-4.fna.fbcdn.net/v/t39.30808-6/392939147_1978140209248339_5648851991880695191_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=vuICIRv19d0AX_evVdr&_nc_oc=AQndWRgSQmrtiKllSRd1MHtGafJ-rPVSPq7uEgWi1DGIRg9nVktD6FmKqKs4GPmbQDjHBndH3AjLywuAhEV3lHYy&_nc_ht=scontent.fdel1-4.fna&oh=00_AfDMnL2VSQLAFaqZn64noNI99e2NYnGddy10gSNC9H5AOQ&oe=65A759B4" alt="" height='60' /></a>
                </div>
                </div>
                {/* nav2 */}
                <div className='nav2'>
                    <div className="logo"><img src="https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/300782630_178231121343304_3594189052520872915_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=FFg6NT__1m8AX-p1iz_&_nc_ht=scontent.fdel1-2.fna&oh=00_AfCtvbnIFEMKB2-fP5G2_21M1GJ4Jem6os_UV8H1yAzXxg&oe=65A678FC" alt="" height='70' /></div>
                   <div><p className='heading'>Prem Common Service Center</p></div>
                    <div className='menu-icon'><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" fill="white" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg></a></div>
                </div>
            </nav>

        </>
    )
}