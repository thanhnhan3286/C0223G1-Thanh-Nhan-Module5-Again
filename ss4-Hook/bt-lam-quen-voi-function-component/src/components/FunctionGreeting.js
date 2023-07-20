import React, {useEffect, useState} from "react";

export function FunctionGreeting() {
    const [firstName, setFirstName] = useState(window.localStorage.getItem("classFirstName") || '');
    const [lastName, setLastName] = useState(window.localStorage.getItem("classLastName") || '');
    useEffect(() => {
        window.localStorage.setItem("classFirstName", firstName);
        window.localStorage.setItem("classLastName", lastName);
    }, [firstName, lastName])
    return (
        <>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName"
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}/>
                <br/>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}/>
                <p>
                    Hello, {''}
                    <span>
                        {lastName} {firstName}
                    </span>
                </p>
            </div>
        </>
    )
}