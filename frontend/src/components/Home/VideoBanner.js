export default function VideoBanner() {
    return (
        <div className="bannerBelow ">
            {/* Modern Video Playing Area */}
            <div className='text-center '>
                <h2 className='mb-2 fs-1'>YOU ARE MOST WELCOME  </h2>
                <h2 className='text-primary'>IN GAMING WORLD!</h2>
            </div >
            <div className="my-5 d-flex justify-content-between align-items-center row">
                <div className=" bg-primary text-white rounded d-flex justify-content-center overflow-hidden mx-auto p-5" style={{ maxWidth: '100%' }}>
                    <div className="d-flex justify-content-center align-items-center" style={{ maxWidth: '100%', height: 'auto' }}>
                        <iframe
                            width="1150"
                            height="450"
                            // maxWidth='100%'
                            src="https://youtube.com/embed/UH3h2hDe6zs?si=O0RZWIhusQv6Vu88"
                            title="YouTube Video"
                            frameBorder="0"
                            allowFullScreen
                            style={{ maxWidth: '100%' }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
