const tableTemplates = {
  name: "table",
  template: {
    type: "box",
    layout: "vertical",
    id: 0,
    contents: [
      {
        type: "table",
        id: 1,
        contents: [
          {
            type: "thead",
            id: 2,
            contents: [
              {
                type: "tr",
                id: 3,
                contents: [
                  {
                    type: "th",
                    colspan: 3,
                    width: "500px",
                    text: "th th th",
                  },
                  {
                    type: "th",
                    colspan: 2,
                    id: 6,
                    text: "other th",
                  },
                ],
              },
            ],
          },
          {
            type: "tbody",
            id: 8,
            contents: [
              {
                type: "tr",
                id: 9,
                contents: [
                  {
                    type: "td",
                    id: 10,
                    contents: [
                      {
                        type: "text",
                        text: "nosdf",
                        id: 11,
                      },
                    ],
                  },
                  {
                    type: "td",
                    id: 12,
                    contents: [
                      {
                        type: "text",
                        text: "cool",
                        id: 13,
                      },
                    ],
                  },
                  {
                    type: "td",
                    id: 14,
                    contents: [
                      {
                        type: "text",
                        text: "yes",
                        id: 15,
                      },
                    ],
                  },
                  {
                    type: "td",
                    id: 16,
                    contents: [
                      {
                        type: "text",
                        text: "no",
                        id: 17,
                      },
                    ],
                  },
                  {
                    type: "td",
                    id: 18,
                    contents: [
                      {
                        type: "text",
                        text: "no",
                        id: 19,
                      },
                    ],
                  },
                ],
              },
              {
                type: "tr",
                id: 20,
                contents: [
                  {
                    type: "td",
                    id: 21,
                    contents: [
                      {
                        type: "box",
                        layout: "horizontal",
                        id: 33,
                        contents: [
                          {
                            type: "checkbox",
                            id: 22,
                          },
                          {
                            type: "text",
                            text: "this is text",
                            flexBasis: "auto",
                            id: 23,
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "td",
                    id: 24,
                    contents: [
                      {
                        type: "text",
                        text: "with two columns",
                        id: 25,
                      },
                    ],
                  },
                  {
                    type: "td",
                    id: 26,
                    contents: [
                      {
                        type: "text",
                        text: "ddd",
                        id: 27,
                      },
                    ],
                  },
                  {
                    type: "td",
                    id: 34,
                    contents: [
                      {
                        type: "box",
                        layout: "horizontal",
                        id: 35,
                        contents: [
                          {
                            type: "text",
                            text: "qwer",
                            id: 36,
                          },
                          {
                            type: "textField",
                            id: 28,
                            width: "100px",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "td",
                    id: 29,
                    contents: [
                      {
                        type: "text",
                        text: "no",
                        id: 30,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "separator",
        marginTop: "10px",
        marginBottom: "100px",
        id: 31,
      },
      {
        type: "text",
        text: "123",
        id: 32,
      },
    ],
  },
};

const tableDemo = {
  name: "table demo",
  template: {
    type: "table",
    id: 0,
    contents: [
      {
        type: "trow",
        id: 1,
        contents: [
          {
            type: "tcol",
            colspan: 2,
            text: "1",
            id: 2,
          },
          {
            type: "tcol",
            rowspan: 2,
            text: "2",
            id: 3,
          },
        ],
      },
      {
        type: "trow",
        id: 4,
        contents: [
          {
            type: "tcol",
            text: "3",
            id: 5,
          },
          {
            type: "tcol",
            text: "4",
            id: 6,
          },
        ],
      },
    ],
  },
};

// const diagnosisTypeBindingData = {
//   jointsD: "",
//   jointsMtRib: "",
//   jointsPd: "",
//   jointsSgCheckbox: false,
//   jointsDCheckbox: false,
//   jointsMtRibCheckbox: false,
//   jointsLsjCheckbox: false,
//   jointsPdCheckbox: false,
//   softTissueOpenUpLigCheckbox: false,
//   softTissueEoCheckbox: false,
// };

const diagnosisTemplates = {
  name: "diagnosis",
  id: 0,
  template: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "box",
        layout: "horizontal",
        alignItems: "center",
        contents: [
          {
            type: "text",
            text: "Joints(MET)",
            flex: 1,
            align: "center",
            fontWeight: "bold",
            fontSize: "18px",
            paddingAll: "5px",
          },
          {
            type: "box",
            layout: "vertical",
            flex: 4,
            contents: [
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "jointsSgCheckbox",
                  },
                  {
                    type: "text",
                    text: "SG:Rt SG ER+EN",
                    flexBasis: "auto",
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                alignItems: "center",
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "jointsDCheckbox",
                  },
                  {
                    type: "text",
                    text: "D+: Tx group dysfn 1st rib on the left +",
                    flexBasis: "auto",
                  },
                  {
                    type: "textField",
                    value: "D+",
                    flexBasis: "auto",
                    width: "140px",
                    bindingData: "jointsD",
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                alignItems: "center",
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "jointsMtRibCheckbox",
                  },
                  {
                    type: "text",
                    text: "MT/rib:",
                    flexBasis: "auto",
                  },
                  {
                    type: "textField",
                    value: "MT/rib",
                    flexBasis: "auto",
                    width: "140px",
                    bindingData: "jointsMtRib",
                  },
                  {
                    type: "text",
                    text: "3D derot/thrust",
                    flexBasis: "auto",
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "jointsLsjCheckbox",
                  },
                  {
                    type: "text",
                    text: "LSJ: derotation",
                    flexBasis: "auto",
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                alignItems: "center",
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "jointsPdCheckbox",
                  },
                  {
                    type: "text",
                    text: "Pelvic Dysfn:",
                    flexBasis: "auto",
                  },
                  {
                    type: "textField",
                    value: "PelvicDysfn",
                    flexBasis: "auto",
                    width: "140px",
                    bindingData: "jointsPd",
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
      },
      {
        type: "box",
        layout: "horizontal",
        alignItems: "center",
        contents: [
          {
            type: "text",
            text: "Soft Tissue",
            flex: 1,
            align: "center",
            fontWeight: "bold",
            fontSize: "18px",
            paddingAll: "5px",
          },
          {
            type: "box",
            layout: "vertical",
            flex: 4,
            contents: [
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "softTissueOpenUpLigCheckbox",
                  },
                  {
                    type: "text",
                    text: "Lt T/L side: open up lig. & intercostrals",
                    flexBasis: "auto",
                  },
                ],
              },
              {
                type: "box",
                layout: "horizontal",
                paddingTop: "5px",
                paddingBottom: "5px",
                contents: [
                  {
                    type: "checkbox",
                    bindingData: "softTissueEoCheckbox",
                  },
                  {
                    type: "text",
                    text: "Lt T/L side: open up EO/IO/QL",
                    flexBasis: "auto",
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

export const templates = [tableTemplates, diagnosisTemplates];

export default tableDemo.template;
