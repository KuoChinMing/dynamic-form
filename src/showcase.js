const tableTemplate = {
  name: "table demo",
  template: {
    "type": "box",
    "layout": "vertical",
    "id": 1,
    "contents": [
      {
        "type": "table",
        "id": 2,
        "contents": [
          {
            "type": "trow",
            "id": 5,
            "contents": [
              {
                "type": "tcol",
                "id": 6,
                "contents": [
                  {
                    "type": "text",
                    "id": 16,
                    "text": "姓名"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 9
              },
              {
                "type": "tcol",
                "id": 10
              },
              {
                "type": "tcol",
                "id": 11
              },
              {
                "type": "tcol",
                "id": 12
              },
              {
                "type": "tcol",
                "id": 13
              }
            ]
          },
          {
            "type": "trow",
            "id": 7,
            "contents": [
              {
                "type": "tcol",
                "id": 8,
                "contents": [
                  {
                    "type": "text",
                    "id": 17,
                    "text": "訪問日時"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 14,
                "colspan": "3"
              },
              {
                "type": "tcol",
                "id": 15,
                "colspan": "2"
              }
            ]
          }
        ]
      },
      {
        "type": "table",
        "id": 3,
        "contents": [
          {
            "type": "trow",
            "id": 18,
            "contents": [
              {
                "type": "tcol",
                "id": 19,
                "contents": [
                  {
                    "type": "text",
                    "id": 26,
                    "text": "體溫"
                  }
                ]
              },
              {
                "type": "tcol",
                "id": 22
              },
              {
                "type": "tcol",
                "id": 23
              },
              {
                "type": "tcol",
                "id": 24
              },
              {
                "type": "tcol",
                "id": 25
              }
            ]
          },
          {
            "type": "trow",
            "id": 20,
            "contents": [
              {
                "type": "tcol",
                "id": 21
              },
              {
                "type": "tcol",
                "id": 27
              },
              {
                "type": "tcol",
                "id": 28
              },
              {
                "type": "tcol",
                "id": 29
              },
              {
                "type": "tcol",
                "id": 30
              }
            ]
          }
        ]
      },
      {
        "type": "table",
        "id": 4,
        "contents": [
          {
            "type": "trow",
            "id": 31,
            "contents": [
              {
                "type": "tcol",
                "id": 32,
                "contents": [
                  {
                    "type": "text",
                    "id": 35,
                    "text": "排尿"
                  }
                ],
                "rowspan": "4"
              },
              {
                "type": "tcol",
                "id": 36
              }
            ]
          },
          {
            "type": "trow",
            "id": 37,
            "contents": [
              {
                "type": "tcol",
                "id": 38
              }
            ]
          },
          {
            "type": "trow",
            "id": 39,
            "contents": [
              {
                "type": "tcol",
                "id": 40
              }
            ]
          },
          {
            "type": "trow",
            "id": 41,
            "contents": [
              {
                "type": "tcol",
                "id": 42
              }
            ]
          }
        ]
      },
      {
        "type": "table",
        "id": 43,
        "contents": [
          {
            "type": "trow",
            "id": 44,
            "contents": [
              {
                "type": "tcol",
                "id": 45,
                "contents": [
                  {
                    "type": "text",
                    "id": 46,
                    "text": "排便"
                  }
                ],
                "rowspan": "11"
              },
              {
                "type": "tcol",
                "id": 47,
                "colspan": "2"
              }
            ]
          },
          {
            "type": "trow",
            "id": 48,
            "contents": [
              {
                "type": "tcol",
                "id": 49,
                "colspan": "2"
              }
            ]
          },
          {
            "type": "trow",
            "id": 50,
            "contents": [
              {
                "type": "tcol",
                "id": 51
              },
              {
                "type": "tcol",
                "id": 68
              }
            ]
          },
          {
            "type": "trow",
            "id": 52,
            "contents": [
              {
                "type": "tcol",
                "id": 53
              },
              {
                "type": "tcol",
                "id": 69
              }
            ]
          },
          {
            "type": "trow",
            "id": 54,
            "contents": [
              {
                "type": "tcol",
                "id": 55
              },
              {
                "type": "tcol",
                "id": 70
              }
            ]
          },
          {
            "type": "trow",
            "id": 56,
            "contents": [
              {
                "type": "tcol",
                "id": 57
              },
              {
                "type": "tcol",
                "id": 71
              }
            ]
          },
          {
            "type": "trow",
            "id": 58,
            "contents": [
              {
                "type": "tcol",
                "id": 59,
                "colspan": "2"
              }
            ]
          },
          {
            "type": "trow",
            "id": 60,
            "contents": [
              {
                "type": "tcol",
                "id": 61,
                "colspan": "2"
              }
            ]
          },
          {
            "type": "trow",
            "id": 62,
            "contents": [
              {
                "type": "tcol",
                "id": 63,
                "colspan": "2"
              }
            ]
          },
          {
            "type": "trow",
            "id": 64,
            "contents": [
              {
                "type": "tcol",
                "id": 65,
                "colspan": "2"
              }
            ]
          },
          {
            "type": "trow",
            "id": 66,
            "contents": [
              {
                "type": "tcol",
                "id": 67,
                "colspan": "2"
              }
            ]
          }
        ]
      }
    ]
  }
};

const diagnosisTypeBindingData = {
  jointsD: "",
  jointsMtRib: "",
  jointsPd: "",
  jointsSgCheckbox: false,
  jointsDCheckbox: false,
  jointsMtRibCheckbox: false,
  jointsLsjCheckbox: false,
  jointsPdCheckbox: false,
  softTissueOpenUpLigCheckbox: false,
  softTissueEoCheckbox: false,
};

const diagnosisTemplate = {
  name: "diagnosis",
  template: {
    type: "box",
    layout: "vertical",
    id: 1,
    contents: [
      {
        type: "box",
        layout: "horizontal",
        alignItems: "center",
        id: 2,
        contents: [
          {
            type: "text",
            text: "Joints(MET)",
            flex: 1,
            align: "center",
            fontWeight: "bold",
            fontSize: "18px",
            id: 3,
          },
          {
            type: "box",
            layout: "vertical",
            flex: 4,
            id: 4,
            contents: [
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                id: 5,
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "jointsSgCheckbox",
                    id: 6,
                  },
                  {
                    type: "text",
                    text: "SG:Rt SG ER+EN",
                    flexBasis: "auto",
                    id: 7,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                alignItems: "center",
                id: 8,
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "jointsDCheckbox",
                    id: 9,
                  },
                  {
                    type: "text",
                    text: "D+: Tx group dysfn 1st rib on the left +",
                    flexBasis: "auto",
                    id: 10,
                  },
                  {
                    type: "textField",
                    value: "D+",
                    flexBasis: "auto",
                    width: "140px",
                    bindingData: "jointsD",
                    id: 11,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                alignItems: "center",
                id: 12,
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "jointsMtRibCheckbox",
                    id: 13,
                  },
                  {
                    type: "text",
                    text: "MT/rib:",
                    flexBasis: "auto",
                    id: 14,
                  },
                  {
                    type: "textField",
                    value: "MT/rib",
                    flexBasis: "auto",
                    width: "140px",
                    bindingData: "jointsMtRib",
                    id: 15,
                  },
                  {
                    type: "text",
                    text: "3D derot/thrust",
                    flexBasis: "auto",
                    id: 16,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                id: 17,
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "jointsLsjCheckbox",
                    id: 18,
                  },
                  {
                    type: "text",
                    text: "LSJ: derotation",
                    flexBasis: "auto",
                    id: 19,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                alignItems: "center",
                id: 20,
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "jointsPdCheckbox",
                    id: 21,
                  },
                  {
                    type: "text",
                    text: "Pelvic Dysfn:",
                    flexBasis: "auto",
                    id: 22,
                  },
                  {
                    type: "textField",
                    value: "PelvicDysfn",
                    flexBasis: "auto",
                    width: "140px",
                    bindingData: "jointsPd",
                    id: 23,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "separator",
        marginAll: "16px",
        id: 24,
      },
      {
        type: "box",
        layout: "horizontal",
        alignItems: "center",
        id: 25,
        contents: [
          {
            type: "text",
            text: "Soft Tissue",
            flex: 1,
            align: "center",
            fontWeight: "bold",
            fontSize: "18px",
            id: 26,
          },
          {
            type: "box",
            layout: "vertical",
            flex: 4,
            id: 27,
            contents: [
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                id: 28,
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "softTissueOpenUpLigCheckbox",
                    id: 29,
                  },
                  {
                    type: "text",
                    text: "Lt T/L side: open up lig. & intercostrals",
                    flexBasis: "auto",
                    id: 30,
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                id: 31,
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "softTissueEoCheckbox",
                    id: 32,
                  },
                  {
                    type: "text",
                    text: "Lt T/L side: open up EO/IO/QL",
                    flexBasis: "auto",
                    id: 33,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

const textFIeldTemplate = {
  name: "textField Demo",
  template: {
    type: "box",
    layout: "horizontal",
    id: 1,
    contents: [
      {
        type: "text",
        id: 3,
        flexBasis: "auto",
      },
      {
        type: "textField",
        flexBasis: "auto",
        width: "180px",
        id: 2,
      },
    ],
  },
};

export const templates = {
  tableTemplate,
  diagnosisTemplate,
};

export const bindingData = { diagnosisTypeBindingData };
export const defaultTemplate = textFIeldTemplate.template;
