const tableTemplate = {
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
            id: 2,
            contents: [
              {
                type: "text",
                id: 3,
                text: "123",
              },
            ],
          },
          {
            type: "tcol",
            id: 19,
            contents: [
              {
                type: "text",
                id: 20,
              },
            ],
          },
          {
            type: "tcol",
            id: 21,
            contents: [
              {
                type: "text",
                id: 22,
              },
            ],
            colspan: "2",
          },
          {
            type: "tcol",
            id: 23,
            contents: [
              {
                type: "text",
                id: 24,
                text: "text",
                color: "green",
                fontSize: "80px",
                textDecoration: "line-through",
                textAlign: "right",
                bottom: "",
                position: "",
                top: "",
              },
            ],
          },
        ],
      },
      {
        type: "trow",
        id: 27,
        contents: [
          {
            type: "tcol",
            id: 28,
            contents: [
              {
                type: "text",
                id: 29,
                color: "purple",
                fontSize: "35px",
                fontWeight: "bold",
                fontStyle: "italic",
                text: "table-data",
              },
            ],
            colspan: "2",
            rowspan: "2",
          },
          {
            type: "tcol",
            id: 32,
            contents: [
              {
                type: "text",
                id: 33,
                text: "321",
                color: "orange",
                fontSize: "30px",
                position: "relative",
                bottom: "18px",
                left: "",
                right: "9px",
                top: "",
              },
            ],
          },
          {
            type: "tcol",
            id: 34,
            contents: [
              {
                type: "text",
                id: 35,
              },
            ],
            rowspan: "2",
          },
          {
            type: "tcol",
            id: 36,
            contents: [
              {
                type: "text",
                id: 37,
              },
            ],
          },
        ],
      },
      {
        type: "trow",
        id: 38,
        contents: [
          {
            type: "tcol",
            id: 39,
            contents: [
              {
                type: "text",
                id: 40,
              },
            ],
          },
          {
            type: "tcol",
            id: 45,
            contents: [
              {
                type: "text",
                id: 46,
                text: "1234567",
                color: "blue",
              },
            ],
            colspan: "",
          },
        ],
      },
      {
        type: "trow",
        id: 72,
        contents: [
          {
            type: "tcol",
            id: 79,
            contents: [
              {
                type: "text",
                id: 80,
                text: "text",
                color: "green",
                fontSize: "80px",
                textDecoration: "line-through",
                textAlign: "right",
                bottom: "",
                position: "",
                top: "",
              },
            ],
          },
          {
            type: "tcol",
            id: 73,
            contents: [
              {
                type: "text",
                id: 74,
                text: "123",
              },
            ],
          },
          {
            type: "tcol",
            id: 75,
            contents: [
              {
                type: "text",
                id: 76,
              },
            ],
          },
          {
            type: "tcol",
            id: 77,
            contents: [
              {
                type: "text",
                id: 78,
              },
            ],
            colspan: "2",
          },
        ],
      },
      {
        type: "trow",
        id: 49,
        contents: [
          {
            type: "tcol",
            id: 50,
            contents: [
              {
                type: "text",
                id: 51,
              },
            ],
          },
          {
            type: "tcol",
            id: 52,
            contents: [
              {
                type: "text",
                id: 53,
              },
            ],
            colspan: "4",
          },
        ],
      },
      {
        type: "trow",
        id: 60,
        contents: [
          {
            type: "tcol",
            id: 61,
            contents: [
              {
                type: "text",
                id: 62,
                textAlign: "center",
                fontStyle: "",
                color: "red",
                fontWeight: "bold",
                fontSize: "25px",
                textDecoration: "underline",
                text: "dynamic form",
              },
            ],
            colspan: "5",
          },
        ],
      },
      {
        type: "trow",
        id: 63,
        contents: [
          {
            type: "tcol",
            id: 64,
            contents: [
              {
                type: "text",
                id: 65,
                text: "123",
              },
            ],
          },
          {
            type: "tcol",
            id: 66,
            contents: [
              {
                type: "text",
                id: 67,
              },
            ],
          },
          {
            type: "tcol",
            id: 68,
            contents: [
              {
                type: "text",
                id: 69,
              },
            ],
            colspan: "2",
          },
          {
            type: "tcol",
            id: 70,
            contents: [
              {
                type: "text",
                id: 71,
                text: "text",
                color: "green",
                fontSize: "80px",
                textDecoration: "line-through",
                textAlign: "right",
                bottom: "",
                position: "",
                top: "",
              },
            ],
          },
        ],
      },
    ],
  },
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
                    bindingKey: "jointsSgCheckbox",
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
                    bindingKey: "jointsDCheckbox",
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
                    bindingKey: "jointsD",
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
                    bindingKey: "jointsMtRibCheckbox",
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
                    bindingKey: "jointsMtRib",
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
                    bindingKey: "jointsLsjCheckbox",
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
                    bindingKey: "jointsPdCheckbox",
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
                    bindingKey: "jointsPd",
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
                    bindingKey: "softTissueOpenUpLigCheckbox",
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
                    bindingKey: "softTissueEoCheckbox",
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
  bindingData: {
    jointsD: "joints D+",
    jointsMtRib: "Mt/rib data",
    jointsPd: "",
    jointsSgCheckbox: true,
    jointsDCheckbox: false,
    jointsMtRibCheckbox: true,
    jointsLsjCheckbox: false,
    jointsPdCheckbox: true,
    softTissueOpenUpLigCheckbox: false,
    softTissueEoCheckbox: true,
  },
};

const textFieldTemplate = {
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
  textFieldTemplate,
};

export const defaultBindingData = diagnosisTemplate.bindingData;
export const defaultTemplate = diagnosisTemplate.template;
