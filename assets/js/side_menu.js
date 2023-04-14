function generateHierarchy(){
    var mytree = [
    {
                            text: "Helpline Data",
                            nodes:
                                [
                                    {
                                        text: "Total Calls Attempted: (754)",
                                        nodes:
                                            [
                                                {
                                                    text: "Total Calls Responded: (288) ",
                                                    nodes:
                                                        [
                                                            {
                                                                text : "+ve Patients (2) ",
                                                                nodes:
                                                                    [
                                                                        {
                                                                            text: "Breast Cancer: (1) ",
                                                                            nodes:
                                                                                [
                                                                                    {
                                                                                        text: "patient receiving therapy: (1) "
                                                                                    },
                                                                                    {
                                                                                        text: "patient pending therapy: (0) "
                                                                                    },
                                                                                ]
                                                                        },

                                                                        {
                                                                            text: "Cervical Cancer: (1) ",
                                                                            nodes:
                                                                                [
                                                                                    {
                                                                                        text: "Patient Receiving Therapy: (0) "
                                                                                    },
                                                                                    {
                                                                                        text: "Patient Pending Therapy: (1) "
                                                                                    },
                                                                                ]
                                                                        },

                                                                        {
                                                                            text: "Ovarian Cancer: (0) ",
                                                                            nodes:
                                                                                [
                                                                                    {
                                                                                        text: "Patient Receiving Therapy: (0) "
                                                                                    },
                                                                                    {
                                                                                        text: "Patient Pending Therapy: (0) "
                                                                                    },
                                                                                ]
                                                                        }
                                                                    ]
                                                            },
                                                            {
                                                                text : "Call Again: (81) "
                                                            },
                                                            {
                                                                text: "Not Interested: (87) ",
                                                                nodes:
                                                                    [
                                                                        {
                                                                            text: "Personal: (42) "
                                                                        },
                                                                        {
                                                                            text: "Social: (5) "
                                                                        },
                                                                        {
                                                                            text: "Financial: (38) "
                                                                        },
                                                                        {
                                                                            text: "Other: (2) "
                                                                        }
                                                                    ]
                                                            },

                                                        ]
                                                },
                                                {
                                                    text: "Did Not Respond: (273) ",
                                                },
                                                {
                                                    text: "Invalid Numbers: (193) ",
                                                },
                                            ]
                                    },
                                ]
                        }

    ];

    $('#myTree').treeview({data: mytree});
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
                'rgb(101, 219, 240)',
                'rgb(245, 171, 236)',
                'rgb(219, 213, 37)'
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
                    fontSize: 12
                }
            },
            tooltips: {
                titleFontSize: 10,
                bodyFontSize: 12
            }
        }
    });
}

$(document).ready(function(){

    generateHierarchy();
    generatePie('totalPositivePie',30 ,2 ,1 );
    generatePie('khiPositivePie', 2, 1, 0);
    generatePie('lhrPositivePie', 28, 1, 1);



    $('.positiveScreening').click(function(){
        var type = $(this).attr('data-type');
        drawTree(type);
    });


});
function getData(type){
    var data = [];

    if(type==='total'){
        data  =  [

                        {id: 1, name: 'Total High Risk (33)', parent: 0},
                        {id: 2, name: 'Reached Hospital (4)', parent: 1},
                        {id: 3, name: 'Did not Reach Hospital(29)', parent: 1},
                        {id: 4, name: 'Positive (2)', parent: 2},
                        {id: 5, name: 'Negative (2)', parent: 2},
                        {id: 6, name: 'Results Awaited (0)', parent: 2},
                        {id: 7, name: 'Therapy Started (1)', parent: 4},
                        {id: 8, name: 'Therapy Pending (1)', parent: 4},

                    ];
    }else if(type==='karachi'){
        data  =  [

                                {id: 1, name: 'Karachi High Risk (3)', parent: 0},
                                {id: 2, name: 'Reached Hospital (1)', parent: 1},
                                {id: 3, name: 'Did not Reach Hospital(2)', parent: 1},
                                {id: 4, name: 'Positive (1)', parent: 2},
                                {id: 5, name: 'Negative (0)', parent: 2},
                                {id: 6, name: 'Results Awaited (0)', parent: 2},
                                {id: 7, name: 'Therapy Started (0)', parent: 4},
                                {id: 8, name: 'Therapy Pending (1)', parent: 4},

                            ];
    }else if(type==='lahore'){
        data  =  [

                                {id: 1, name: 'Lahore High Risk (30)', parent: 0},
                                {id: 2, name: 'Reached Hospital (3)', parent: 1},
                                {id: 3, name: 'Did not Reach Hospital(27)', parent: 1},
                                {id: 4, name: 'Positive (1)', parent: 2},
                                {id: 5, name: 'Negative (2)', parent: 2},
                                {id: 6, name: 'Results Awaited (0)', parent: 2},
                                {id: 7, name: 'Therapy Started (1)', parent: 4},
                                {id: 8, name: 'Therapy Pending (0)', parent: 4},

                            ];
    }
    return data;
}

function drawTree( type) {
    var data = getData(type);


    org_chart = $('#orgChart').orgChart({

        data: data,// your data

        showControls: false,// display add or remove node button.

        allowEdit: false,// click the node's title to edit

        onAddNode: function (node) {
        },

        onDeleteNode: function (node) {
        },

        onClickNode: function (node) {
        },

        newNodeText: 'Add Child'// text of add button

    });
}
