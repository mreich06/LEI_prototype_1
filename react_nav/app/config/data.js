export const stationdetail = {
  "fry": {
    "family": {
      "list": [
        {
          "name": "fry",
          "cycletime": "20 sec",
          "menuitems": "Fries"
        }
      ],
      "tickmarks" : ["F1"]

    },
    "monday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "5:00-5:30"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "tuesday": {
      "tableData": {
        "time": ["11:30-12:00pm", "1:30-2:00pm"],
        "units": ["18","22"],
        "rate": ["20", "18"],
      },
    },
    "wednesday": {
      "tableData": {
        "time": ["11:00-11:30pm", "12:30-1:00pm", "5:00-5:30"],
        "units": ["20","21", "18"],
        "rate": ["19", "18", "21"],
      },
    },
    "thursday": {
      "tableData": {
        "time": ["11:30-12:00pm", "5:00-5:30", "6:30-7:00"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "friday": {
      "tableData": {
        "time": ["11:00-11:30pm", "12:30-1:00pm", "6:30-7:00", "7:30-8:00"],
        "units": ["20","22", "25", "30"],
        "rate": ["18", "16", "14", "12"],
      },
    },
    "saturday": {
      "tableData": {
        "time": ["11:00-11:30pm", "12:30-1:00pm", "6:30-7:00", "8:00-8:30"],
        "units": ["25","27", "32", "33"],
        "rate": ["14", "13", "11", "10"],
      },
    },
    "sunday": {
      "tableData": {
        "time": ["12:30-1:00pm", "1:30-2:00", "6:30-7:00", "8:00-8:30"],
        "units": ["28","30", "32", "30"],
        "rate": ["13", "12", "11", "12"],
      },
    },

  },

  "grill": {
    "family": {
      "list": [
        {
          "name": "salmon, swordfish, tuna",
          "cycletime": 40,
          "menuitems": "Grilled Swordfish, Tuna Crudo, Yellowfin Tuna, HiddenFjord Faroe Island Salmon",
          "percent": 40,
        },
        {
          "name": "burger",
          "cycletime": 20,
          "menuitems": "Tuna Burger, Salmon Burger, Shrimp Burger, Creekstone Burger",
          "percent": 30,
        },
        {
          "name": "salad meat, bacon-wrapped scallops",
          "cycletime": 60,
          "menuitems": "Crabmeat Salad, Grilled Swordfish Salad, Bacon Wrapped Scallops",
          "percent": 20,
        },
        {
          "name": "trout",
          "cycletime": 100,
          "menuitems": "Rainbow Trout",
          "percent": 5,
        },
        {
          "name": "steak",
          "cycletime": 30,
          "menuitems": "Creekstone Sirloin Steak, Steak & Truffle Frites, HiddenFjord Faroe Island Salmon Steak, Bone in Halibut Steak, Pork Chop",
          "percent": 5,
        },
      ],
      "tickmarks": ["G1", "G2", "G3", "G4", "G5"]
    },
    "monday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["60","62", "59"],
        "rate": ["30", "29", "31"], //1800 / units
      },
    },
    "tuesday": {
      "tableData": {
        "time": ["11:30-12:00pm", "1:30-2:00pm"],
        "units": ["18","22"],
        "rate": ["20", "18"],
      },
    },
    "wednesday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "thursday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "friday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "saturday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "sunday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
  },
  "oven": {
    "family": {
      "list": [
        {
          "name": "cod, artichoke, lobster mac",
          "cycletime": "50 sec",
          "menuitems": "Anna's Baked Boston Cod, Kasu Marinated Black Cod, Roasted Atlantic Cod, Baked Stuffed Artichoke, Lobster Macaroni & Cheese"
        },
        {
          "name": "rhode island stuffie",
          "cycletime": "51 sec",
          "menuitems": "Rhode Island Stuffie"
        },
        {
          "name": "lobster, 1.50-1.75",
          "cycletime": "52 sec",
          "menuitems": "Lobster, 1.50-1.75"
        },
        {
          "name": "lobster bake",
          "cycletime": "53 sec",
          "menuitems": "Lobster Bake"
        },
        {
          "name": "lobster, 2.00, 2.50",
          "cycletime": "54 sec",
          "menuitems": "Lobster, 2.00-2.75"
        },
      ],
      "tickmarks": ["O1", "O2", "O3", "O4", "O5"]
    },
    "monday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "tuesday": {
      "tableData": {
        "time": ["11:30-12:00pm", "1:30-2:00pm"],
        "units": ["18","22"],
        "rate": ["20", "18"],
      },
    },
    "wednesday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "thursday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "friday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "saturday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "sunday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
  },


  "pantry": {
    "family": {
      "list": [
        {
          "name": "surf/turf, lobster roll, crabmeat roll",
          "cycletime": "70 sec",
          "menuitems": "Surf & Turf Roll, Lobster Roll, Crabmeat Roll"
        },
        {
          "name": "crabmeat, romaine, house salad",
          "cycletime": "71 sec",
          "menuitems": "Grilled Romaine & Blue Cheese, Seasonal Salad"
        },
      ],
      "tickmarks": ["P1", "P2"]
    },
    "monday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "tuesday": {
      "tableData": {
        "time": ["11:30-12:00pm", "1:30-2:00pm"],
        "units": ["18","22"],
        "rate": ["20", "18"],
      },
    },
    "wednesday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "thursday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "friday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "saturday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "sunday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
  },


  "pizzataco": {
    "family": {
      "list": [
        {
          "name": "taco",
          "cycletime": "80 sec",
          "menuitems": "Braised BBQ Short Rib Tacos, Chipotle Lime Fish Tacos, Tuna Crudo Taco"
        },
        {
          "name": "pizza",
          "cycletime": "81 sec",
          "menuitems": "Cheese Pizza, White Clam Pizza, Crab & Pepperoni Pizza, Lobster Pizza, Smoked Salmon Pizza"
        },
      ],
      "tickmarks": ["PT1", "PT2"]
    },
    "monday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "tuesday": {
      "tableData": {
        "time": ["11:30-12:00pm", "1:30-2:00pm"],
        "units": ["18","22"],
        "rate": ["20", "18"],
      },
    },
    "wednesday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "thursday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "friday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "saturday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "sunday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
  },


  "saute": {
    "family": {
      "list": [
        {
          "name": "stew, pasta",
          "cycletime": "90 sec",
          "menuitems": "Portuguese Seafood Stew, Linguini & Clams, Sausage & Shrimp Orecchiette, Roch Shrimp Scampi"
        },
        {
          "name": "mussels, steamers",
          "cycletime": "91 sec",
          "menuitems": "Sauteed Mussels, steamers"
        },
      ],
      "tickmarks": ["S1", "S2"]
    },
    "monday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "tuesday": {
      "tableData": {
        "time": ["11:30-12:00pm", "1:30-2:00pm"],
        "units": ["18","22"],
        "rate": ["20", "18"],
      },
    },
    "wednesday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "thursday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "friday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "saturday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
    "sunday": {
      "tableData": {
        "time": ["11:30-12:00pm", "12:30-1:00pm", "1:30-2:00pm"],
        "units": ["18","22", "17"],
        "rate": ["20", "18", "21"],
      },
    },
  },


};

export const stations = [
  {
    "name":
      [{"first": "fry"},{ "family": {
        "list": [
          {
            "name": "fry",
            "cycletime": "20 sec",
            "menuitems": "cheeseburger, chickenburger"
          }
        ],
        "tickmarks" : ["F1"]

      } }],



    "login": {
      "username": "smallmouse862",
    },
    "id": {
      "name": "",
      "value": null
    },
  },

  {
    "name": [
      {"first": "grill"},
      {"family": {
        "list": [
          {
            "name": "salmon, swordfish, tuna",
            "cycletime": "30 sec",
            "menuitems": "Grilled Swordfish, Tuna Crudo, Yellowfin Tuna, HiddenFjord Faroe Island Salmon"
          },
          {
            "name": "burger",
            "cycletime": "31 sec",
            "menuitems": "Tuna Burger, Salmon Burger, Shrimp Burger, Creekstone Burger"
          },
          {
            "name": "salad meat, bacon-wrapped scallops",
            "cycletime": "32 sec",
            "menuitems": "Crabmeat Salad, Grilled Swordfish Salad, Bacon Wrapped Scallops"
          },
          {
            "name": "trout",
            "cycletime": "33 sec",
            "menuitems": "Rainbow Trout"
          },
          {
            "name": "steak",
            "cycletime": "34 sec",
            "menuitems": "Creekstone Sirloin Steak, Steak & Truffle Frites, HiddenFjord Faroe Island Salmon Steak, Bone in Halibut Steak, Pork Chop"
          },
        ],
        "tickmarks": ["G1", "G2", "G3", "G4", "G5"]
      },
    }
    ],

    "login": {
      "username": "goldenduck344",
    },
    "id": {
      "name": "",
      "value": null
    },
  },

  {
    "name": [
      {"first": "oven"},
      {"family": {
        "list": [
          {
            "name": "cod, artichoke, lobster mac",
            "cycletime": "50 sec",
            "menuitems": "Anna's Baked Boston Cod, Kasu Marinated Black Cod, Roasted Atlantic Cod, Baked Stuffed Artichoke, Lobster Macaroni & Cheese"
          },
          {
            "name": "rhode island stuffie",
            "cycletime": "51 sec",
            "menuitems": "Rhode Island Stuffie"
          },
          {
            "name": "lobster, 1.50-1.75",
            "cycletime": "52 sec",
            "menuitems": "Lobster, 1.50-1.75"
          },
          {
            "name": "lobster bake",
            "cycletime": "53 sec",
            "menuitems": "Lobster Bake"
          },
          {
            "name": "lobster, 2.00, 2.50",
            "cycletime": "54 sec",
            "menuitems": "Lobster, 2.00-2.75"
          },
        ],
        "tickmarks": ["O1", "O2", "O3", "O4", "O5"]
      },
    }
    ],

    "login": {
      "username": "browngorilla270",
    },
    "id": {
      "name": "SSN",
      "value": "527-24-8023"
    },
  },

  {
    "name": [
      {"first": "pantry"},
      {"family": {
        "list": [
          {
            "name": "surf/turf, lobster roll, crabmeat roll",
            "cycletime": "70 sec",
            "menuitems": "Surf & Turf Roll, Lobster Roll, Crabmeat Roll"
          },
          {
            "name": "crabmeat, romaine, house salad",
            "cycletime": "71 sec",
            "menuitems": "Grilled Romaine & Blue Cheese, Seasonal Salad"
          },
        ],
        "tickmarks": ["P1", "P2"]
      },
    }
    ],

    "login": {
      "username": "goldenswan363",
    },
    "id": {
      "name": "CPR",
      "value": "720294-2175"
    },
  },

  {
    "name": [
      {"first": "pizza/taco"},
      {"family": {
        "list": [
          {
            "name": "taco",
            "cycletime": "80 sec",
            "menuitems": "Braised BBQ Short Rib Tacos, Chipotle Lime Fish Tacos, Tuna Crudo Taco"
          },
          {
            "name": "pizza",
            "cycletime": "81 sec",
            "menuitems": "Cheese Pizza, White Clam Pizza, Crab & Pepperoni Pizza, Lobster Pizza, Smoked Salmon Pizza"
          },
        ],
        "tickmarks": ["PT1", "PT2"]
      },
    }
    ],

    "login": {
      "username": "yellowdog477",
    },
    "id": {
      "name": "",
      "value": null
    },
  },

  {
    "name": [
      {"first": "saute"},
      {"family": {
        "list": [
          {
            "name": "stew, pasta",
            "cycletime": "90 sec",
            "menuitems": "Portuguese Seafood Stew, Linguini & Clams, Sausage & Shrimp Orecchiette, Roch Shrimp Scampi"
          },
          {
            "name": "mussels, steamers",
            "cycletime": "91 sec",
            "menuitems": "Sauteed Mussels, steamers"
          },
        ],
        "tickmarks": ["S1", "S2"]
      },
    }
    ],

    "login": {
      "username": "heavygoose871",
    },
    "id": {
      "name": "TFN",
      "value": "234813411"
    },
  }

];
