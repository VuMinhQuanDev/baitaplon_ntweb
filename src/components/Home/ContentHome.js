import React from 'react'

const ContentHome = (props) => {
    return (
        <>
            <div className="pt-12" >
                <h1 className="text-center text-black text-4xl font-semibold mb-5 " >Live anywhere</h1>
                <h2 className="text-center font-ligth text-2xl text-gray-500 mb-3" >Keep calm & travel on</h2>
            </div>
            <div className="grid grid-cols-3 gap-x-8 max-w-6xl mx-auto " >
                {Array(3).fill(0).map((item, index) => (
                    <div key={index} >
                        <div className="h-96 mb-5" >
                            <img
                                className="w-full h-full object-cover rounded-lg"
                                src="https://images.unsplash.com/photo-1675060176145-3de509b333db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                alt="" />
                        </div>
                        <h3 className="text-center font-medium text-lg mb-3" >Enjoy the great cold</h3>
                        <span className="block text-center text-gray-400 text-sm" >6,789 props</span>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ContentHome