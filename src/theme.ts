import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    body: "'Lato', sans-serif",
    heading: "'Lato', sans-serif"
  },
  colors: {
    brand: {
      base: "#0052CC",
      hover: "#1968DF",
      disabled: "#AFB9C3",
      danger: "#FF2222",
    },
    text: {
      default: "#525C65",
      headline: "#253642"
    }
  },
  styles: {
    global: {
      body: {
        fontFamily: "body",
        fontSize: "16px",
        color: "text.default",
      }
    }
  },
  components: {
    Heading: {
      baseStyle: {
        color: "text.headline"
      },
      sizes: {
        lg: {
          fontSize: "32px"
        },
        md: {
          fontSize: "24px"
        },
        sm: {
          fontSize: "20px"
        }
      }
    },
    Button: {
      sizes: {
        lg: {
          height: "56px",
          fontSize: "18px",
        }
      },
      variants: {
        solid: {
          bg: "brand.base",
          color: "white",
          _active: {
              bg: "brand.base",
          },
          _hover: {
              bg: "brand.hover",
          },
          _disabled: {
              bg: "brand.disabled"
          }
        },
        outline: {
          borderColor: "brand.base",
          color: "brand.base",
          _active: {
            borderColor: "brand.base",
            color: "brand.base"
            },
          _hover: {
            bg: "body",
            borderColor: "brand.hover",
            color: "brand.hover"
            },
          _disabled: {
            borderColor: "brand.disabled",
            color: "brand.disabled"
          }
        }
      }
    },
    Input: {
      sizes: {
        lg: {
          field: {
            height: "56px"
          }
        }
      },
      defaultProps: {
        errorBorderColor: "brand.danger"
      }
    },
    Link: {
      baseStyle: {
        _hover: {
          color: "brand.hover",
          textDecoration: "none"
        }
      }
    },
    Table: {
      baseStyle: {
        td: {
          py: 0
        }
      },
      variants: {
        brand: {
          padding: 0,
          px: 0,
          py: 0,
          p: 0
        }
      }
    },
  }
})

//console.log(theme)  