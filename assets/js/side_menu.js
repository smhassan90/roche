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
									text: "Total Calls Attempted: (640)",
									nodes:
										[
											{
												text: "Total Calls Responded: (96) ",
												nodes: 
													[
														{
															text : "+ve Patients (3) ",
															nodes:
																[
																	{
																		text: "Breast Cancer: (1) ",
															nodes:
																[
																	{
																		text: "patient receiving therapy: () "
																	},
																	{   
																		text: "patient pending therapy: () "
																	},
																]
																	},
																	
																	{   
																		text: "Cervical Cancer: (1) ",
																		nodes:
																[
																	{
																		text: "Patient Receiving Therapy: () "
																	},
																	{   
																		text: "Patient Pending Therapy: () "
																	},
																]
																	},
																	
																	{   
																		text: "Ovarian Cancer: (1) ",
																		nodes:
																[
																	{
																		text: "Patient Receiving Therapy: () "
																	},
																	{   
																		text: "Patient Pending Therapy: () "
																	},
																]
																	}
																]
														},
														{
															text : "Call Again: (14) "
														},														
														{
															text: "Not Interested: (79) ",
															nodes:
																[
																	{
																		text: "Personal: (45) "
																	},
																	{   
																		text: "Social: (3) "
																	},
																	{   
																		text: "Financial: (31) "
																	},
																	{   
																		text: "Other: (0) "
																	}
																]
														},
														
													]
											},
											{
												text: "Did Not Respond: (344) ",
											},
											{
												text: "Invalid Numbers: (200) ",
											},
										]
								},
							]		
                    },
                
				]
        },
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
    generatePie('totalPositivePie',25 ,2 ,1 );
    generatePie('khiPositivePie', 2, 1, 0);
    generatePie('lhrPositivePie', 23, 1, 1);

});
