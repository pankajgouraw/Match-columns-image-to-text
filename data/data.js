
const background = 'background-image: radial-gradient(#3dcd47,#1a1a1a);';
const header = 'Match the correct options';
const headerColor = '#fff';


const data = [
	{
		'listA' :[
	                "next.png",
	                "prev.png",
	                "happy.png",
	                "sad.png"
		        ],

		'listB' :[
	                "next",
	                "happy",
	                "Prev",
	                'sad' 
                ],

        'answer' :[
	               {"from":"next.png","to":"Prev"},
	               {"from":"prev.png","to":"next"},
	               {"from":"happy.png","to":'happy'},
	               {"from":"sad.png","to":"sad"}
                 ]	
	},

	{
		'listA' :[
		            "sad.png",
	                "next.png",
	                "prev.png",
	                "happy.png"
	                
		        ],

		'listB' :[
	                "next",
	                "happy",
	                "Prev",
	                'sad' 
                ],

        'answer' :[
	               {"from":"next.png","to":"Prev"},
	               {"from":"prev.png","to":"next"},
	               {"from":"happy.png","to":'happy'},
	               {"from":"sad.png","to":"sad"}
                 ]		
	},

	{
				'listA' :[
	                "next.png",
	               
	                "happy.png",
	                 "prev.png",
	                "sad.png"
		        ],

		'listB' :[
	                "next",
	                "happy",
	                "Prev",
	                'sad' 
                ],

        'answer' :[
	               {"from":"next.png","to":"Prev"},
	               {"from":"prev.png","to":"next"},
	               {"from":"happy.png","to":'happy'},
	               {"from":"sad.png","to":"sad"}
                 ]	
	}
	
];




