import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import axios from "axios";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])


    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {

        axios.get(url,{withCredentials:true})
        .then(res => {
            setBookings(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url])

    const handleDelete = id=> {
        const proceed = confirm("Are you sure want to delete")

        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`,{
                method:"DELETE",
                headers:{

                }
            })
            .then(res => res.json())
            .then(data =>{
                 console.log(data)
                 if(data.deletedCount > 0 ){
                    alert("deleted successfully")

                    const remaining = bookings.filter(booking => booking._id !== id)
                    setBookings(remaining)
                 }
            })

        }
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"PATCH",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify({status : "confirm"})

        })
        .then(res => res.json())

        .then (data => {
            console.log(data);
            if(data.modifiedCount > 0 ){
               const remaining = bookings.filter(booking => booking._id !== id)
               const update = bookings.find(booking => booking._id === id)
               update.status = "confirm"
               const newBookings = [update,...remaining]
               setBookings(newBookings)


            }
        })

    }
    


    return (
        <div>
            <h3>Bookings : {bookings.length} </h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                     <thead>
                        <tr className="bg-slate-400 rounded">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                  
                    <tbody>
                        {
                            bookings?.map(booking => <BookingsRow
                            key={booking.id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleConfirm={handleConfirm}

                            
                            
                            
                            ></BookingsRow>)
                        }
                     
                       
                       
                    </tbody>
                  

                </table>
            </div>

        </div>
    );
};

export default Bookings;