	function generateHierarchy(){
    var mytree = [
        {
            text: " Reports of Referral center ",
            nodes:
                [
                    {
                        text: "Karachi",
                        nodes:
                            [
                                {
                                    text: " Patients at JPCM ",
                                    nodes: [
                                        {
                                            text: " +ve Patients",
                                            nodes:[{
                                                text: " Patients Receiving Therapy"
                                            },
                                                {   text: " Patients Pending Therapy"},
                                            ]
                                        },
                                        {
                                            text : " -ve Patients"
                                        }
                                    ]
                                },
                                {
                                    text: "(2) Patients at Kiran Hospital",
                                    nodes: [
                                        {
                                            text: "+ve Patients",
                                            nodes:[{
                                                text: "Patients Receiving Therapy"
                                            },
                                                {   text: "Patients Pending Therapy"},
                                            ]
                                        },
                                        {
                                            text : "(2) -ve Patients"
                                        }
                                    ]
                                },
                                {
                                    text: "Patients at Cancer Foundation Hospital",
                                    nodes: [
                                        {
                                            text: "+ve Patients",
                                            nodes:[{
                                                text: "Patients Receiving Therapy"
                                            },
                                                {   text: "Patients Pending Therapy"},
                                            ]
                                        },
                                        {
                                            text : "-ve Patients"
                                        }
                                    ]
                                },
                                {
                                    text: "(2) Other",
                                    nodes: [
                                        {
                                            text: "(2) +ve Patients",
                                            nodes:[{
                                                text: "(2) Patients Receiving Therapy"
                                            },
                                                {   text: "Patients Pending Therapy"},
                                            ]
                                        },
                                        {
                                            text : "-ve Patients"
                                        }
                                    ]
                                }
                            ]
                    },
                    {
                        text: "Lahore",
                        nodes:
                            [
                                {
                                    text: "Patients at Jinnah Hospital ",
                                    nodes: [
                                        {
                                            text: "+ve Patients",
                                            nodes:[{
                                                text: "Patients Receiving Therapy"
                                            },
                                                {   text: "Patients Pending Therapy"},
                                            ]
                                        },
                                        {
                                            text : "-ve Patients"
                                        }
                                    ]
                                },
                                {
                                    text: "(1) Patients at INMOL Cancer Hospital ",
                                    nodes: [
                                        {
                                            text: "(1) +ve Patients",
                                            nodes:[{
                                                text: "(1) Patients Receiving Therapy"
                                            },
                                                {   text: "Patients Pending Therapy"},
                                            ]
                                        },
                                        {
                                            text : "-ve Patients"
                                        }
                                    ]
                                },
                                {
                                    text: "(1) Patients at Mayo Hospital",
                                    nodes: [
                                        {
                                            text: "(1) +ve Patients",
                                            nodes:[{
                                                text: "(1) Patients Receiving Therapy"
                                            },
                                                {   text: "Patients Pending Therapy"},
                                            ]
                                        },
                                        {
                                            text : "-ve Patients"
                                        }
                                    ]
                                },
                                {
                                    text: "(1) Others",
                                    nodes: [
                                        {
                                            text: "(1) +ve Patients",
                                            nodes:[{
                                                text: "(1) Patients Receiving Therapy"
                                            },
                                                {   text: "Patients Pending Therapy"},
                                            ]
                                        },
                                        {
                                            text : "-ve Patients"
                                        }
                                    ]
                                }
                            ]
                    },
                    {
                        text: "Helpline",
                        nodes:
                            [
                                {
                                    text: " Total Responded Calls: 30 ",
                                    nodes: [
                                        {
                                            text: "+ve Patients: 0 ",
                                            nodes:[{
                                                text: "Patients Receiving Therapy: 0 "
                                            },
                                                {   text: "Patients Pending Therapy: 0 "},
                                            ]
                                        },
                                        {
                                            text : "-ve Patients: 30 "
                                        }
                                    ]
                                },
                                {
                                    text: "Not Responding: 168 ",
                                },
                                {
                                    text: "Invalid Numbers: 202 ",
                                }
                            ]
                    },
                ]
        },
    ];

    $('#myTree').treeview({data: mytree});
}

function generateTotalPie(){
    const totalPositivePie = document.getElementById('totalPositivePie');
    const totalPositivePieData = {
        labels: [
            'Breast Cancer',
            'Cervical Cancer',
            'Ovarian Cancer '
        ],
        datasets: [{
            label: 'Cancer Survey',
            data: [25, 27, 2],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };
    new Chart(totalPositivePie, {
        type: 'doughnut',
        data: totalPositivePieData,
        options: {
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 99, 132)',
                    fontSize: 10
                }
            },
            tooltips: {
                titleFontSize: 10,
                bodyFontSize: 10
            }
        }
    });
}

function generatePie(id, breast, cervical, ovarian){
    const totalPositivePie = document.getElementById(id);
    const totalPositivePieData = {
        labels: [
            'Breast Cancer',
            'Cervical Cancer',
            'Ovarian Cancer '
        ],
        datasets: [{
            label: 'Cancer Survey',
            data: [breast, cervical, ovarian],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };
    new Chart(totalPositivePie, {
        type: 'doughnut',
        data: totalPositivePieData,
        options: {
            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 99, 132)',
                    fontSize: 10
                }
            },
            tooltips: {
                titleFontSize: 10,
                bodyFontSize: 10
            }
        }
    });
}

$(document).ready(function(){

    generateHierarchy();
    generatePie('totalPositivePie',25 ,27 ,2 );
    generatePie('khiPositivePie', 3, 1, 0);
    generatePie('lhrPositivePie', 22, 26, 2);

    drawTree();

});
function drawTree(){
    var testData = [

        {id: 1, name:'High Risk (30)', parent: 0},
        {id: 2, name:'Reached Hospital (20)', parent: 1},
        {id: 3, name:'Did not Reached Hospital(10)', parent: 1},
        {id: 4, name:'Positive (15)', parent: 2},
        {id: 5, name:'Negative (3)', parent: 2},
        {id: 6, name:'Results Awaited (2)', parent: 2},
        {id: 7, name:'Therapy Started (10)', parent: 4},
        {id: 8, name:'Therapy Pending (5)', parent: 4},

    ];

    org_chart = $('#orgChart').orgChart({

        data: testData,// your data

    showControls:false,// display add or remove node button.

    allowEdit:false,// click the node's title to edit

    onAddNode:function(node){},

    onDeleteNode:function(node){},

    onClickNode:function(node){},

    newNodeText: 'Add Child'// text of add button

});


}
