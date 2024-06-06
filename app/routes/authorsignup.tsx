





export default function AuthorSignUp() {
    return (
        <div className="flex justify-center items-start" >

            {/* form box */}
            <div className="flex flex-col border border-solid w-3/4 gap-10 h-96 justify-center items-start">
                {/* header */}
                <div className="items-start">
                    <h1 className="text-2xl font-bold"> Author Signup </h1>

                </div>

                {/* body */}
                <div className="flex flex-col items-center justify-start ">

                    <div className="items-center">
                        Name
                    </div>
                    <input className="border-solid border-4">
                    </input>

                    <div className="items-center">
                        Biography
                    </div>
                    <input className="border-solid border-4">
                    </input>


                    <div className="justify-center">

                        <button className="border-solid border-4">
                            Submit
                        </button>
                    </div>



                </div>
            </div>

        </div >
    )

}

