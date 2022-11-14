import {FC, useEffect, useState} from "react";

import {IJob} from "../../interfaces";
import {jobService} from "../../services";
import {Job} from "../Job/Job";
import {useLocation, useSearchParams} from "react-router-dom";

interface IProps {
    activePage: number,
    setActivePage: any,
}

const Jobs: FC<IProps> = ({activePage, setActivePage}) => {
    const [jobs, setJobs] = useState<IJob[]>([]);
    const {state, pathname} = useLocation();

    const [query, setQuery] = useSearchParams({
        page: `${activePage}`,
    });

    useEffect(() => {
        setQuery({
            page: `${activePage}`,
        });
    }, [activePage]);

/*    useEffect(() => {
        jobService.getAll().then(({data}) => setJobs(data));
    }, [query, pathname])*/

        useEffect(() => {
            //****************************************************
                setJobs([
                    {
                    id: "635ee6d3ece4a5643d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours dtetreyreye  ssssssssssssssssssssssssss",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time 2222 2222222222222222222222222",
                        "Temporary"
                    ]
                },
                    {
                    id: "635e46d3ece4a5643d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "635ee6d3e4e4a5643d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "635ee6d3ece4a5443d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "635ee6d3ece4a3643d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "6353e6d3ece4a5643d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "635ee6d3ece4a5643d53f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "635ee6d3ece4a5663d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "356e66d3ece4a5643d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "635ee6d3ece4a5643658f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "635e96d3ece4a5643d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "635ee693ece4a5643d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "605ee6d3ece4a5643d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "635ee6d3e0e4a5643d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "635ee6d00ce4a5643d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                    {
                    id: "635ee6d3ece115643d58f4bd",
                    name: "Elentrix",
                    email: "elentrix@gmail.pohl",
                    phone: "+46481059427",
                    title: "Magna quis proident do ullamco cillum veniam reprehenderit sunt commodo aute elit.",
                    salary: "61k-99k",
                    address: "26 Zortman Thomas Street",
                    benefits: [
                        "Flexible hours",
                        "Relocation"
                    ],
                    location: {
                        "lat": 17.761356,
                        "long": 59.020266
                    },
                    pictures: [
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300",
                        "https://picsum.photos/200/300"
                    ],
                    createdAt: new Date("2012-09-12T20:40:49.965Z"),
                    updatedAt: new Date("2012-09-13T20:40:49.965Z"),
                    description: "\n  Tempor cillum Lorem fugiat labore. Reprehenderit fugiat sit sit sunt irure Lorem ea mollit proident quis mollit non adipisicing cupidatat. Est excepteur do fugiat officia ex nisi excepteur ea cillum culpa laborum ut cupidatat sint. In do adipisicing ut sint tempor velit non commodo reprehenderit eu et in occaecat aute.\n  \n  Responsopilities:\n    Non sint mollit amet et consequat proident adipisicing proident proident quis veniam cillum sit incididunt. Ad laboris aliqua in commodo et consequat commodo ex labore est fugiat. Aliquip sit adipisicing amet cillum mollit commodo fugiat ut consectetur ad dolor culpa occaecat ex.\n  \nCompensation & Benefits:\n\t    Duis do et dolore dolor. Irure exercitation ad aute ad consequat adipisicing esse nulla sit proident dolore aliqua commodo qui. Anim consequat excepteur aute consequat nulla culpa nulla amet mollit officia do qui velit consequat.\n\n",
                    employment_type: [
                        "Full time",
                        "Temporary"
                    ]
                },
                ]);

            //****************************************************
    }, [query, pathname])

    useEffect(() => {
        setActivePage(Number(query.get('page') || '1'));
    }, [state])

    return (
        <div className={"wrap"}>
            <div className={"jobsContainer"}>
                {
                    jobs.map(job => <Job key={job.id} job={job}/>)
                }
            </div>
        </div>
    );
};

export {Jobs};