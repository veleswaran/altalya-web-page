import React, { useState } from 'react';

const Accordion = ({syllabus}) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    let key = Object.keys(syllabus);
    return (
        <>
            <ul className="accordion-box wow fadeInRight">
                {key.map((val,i)=>
          
                <li className={isActive.key == i ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(i)}>
                    <div className={isActive.key == i ? "acc-btn active" : "acc-btn"}>{val}
                        <div className="icon fa fa-angle-down" />
                    </div>
                    {syllabus[val].map((list)=>
                    <div className={isActive.key == i ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">{list}</div>
                        </div>
                    </div>
                  )}
                </li>
                )}
               
            </ul>
        </>
    );
};

export default Accordion;