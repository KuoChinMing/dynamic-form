const tableTemplate = {
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
            paddingAll: "5px",
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
            paddingAll: "5px",
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

export const templates = {
  tableTemplate,
  diagnosisTemplate,
  tableDemo,
};
export const bindingData = { diagnosisTypeBindingData };
export const defaultTemplate = diagnosisTemplate.template;
