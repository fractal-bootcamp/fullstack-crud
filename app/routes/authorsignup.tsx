import { AuthorInput, createAuthor } from "~/service/Author"


/*

OK what do I have to do 

I need some way to collect the information in the input fields
I need to know how to id the input fields and extract info from them

and then on submit, run a function that stores that data in the prisma database

so I'll just create a branch includes some dummy data and tests to see if 
i can properly create the rows in prisma

*/


const dummyAuthor: AuthorInput = {
    name: "Kate DiCamillo",
    biography: "A children's book author"

}



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
                <div className="flex flex-col justify-start ">

                    <div className="items-center">
                        Name
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                    <div className="items-center">
                        Biography
                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />


                    <div className="justify-center">

                        <button onClick={() => { createAuthor(dummyAuthor) }} className="btn btn-outline">Submit</button>

                    </div>



                </div>
            </div>

        </div >
    )

}

