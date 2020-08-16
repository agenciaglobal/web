import React, { Fragment } from "react"
import { Container, SvgIcon, Hidden } from "@material-ui/core"
import { makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
  SvgIcon: {
    fontSize: 22,
    fill: theme.custom.grey1,
    "&:hover": {
      fill: "#FFCC00",
    },
  },
  a: {
    background: "transparent",
    border: "none",
    outline: "none",
    boxShadow: "none",
  },
  container: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    padding: 0,
  },
  div: {
    margin: 2,
  },
}))

const SideFooter = (): React.ReactElement => {
  const classes = useStyles()

  return (
    <Fragment>
      <Hidden smDown>
        <Container className={classes.container}>
          <div className={classes.div}>
            <a
              className={classes.a}
              href="https://www.facebook.com/weliveglobal"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon className={classes.SvgIcon}>
                <path d="M21.375 11.6875C21.375 14.0833 20.5938 16.1927 19.0312 18.0156C17.4688 19.8125 15.5286 20.8932 13.2109 21.2578V14.5H15.4766L15.9062 11.6875H13.2109V9.85156C13.2109 8.86198 13.7318 8.36719 14.7734 8.36719H15.9844V5.98438C15.2552 5.85417 14.5391 5.78906 13.8359 5.78906C13.0807 5.78906 12.4297 5.93229 11.8828 6.21875C11.362 6.50521 10.9453 6.9349 10.6328 7.50781C10.3203 8.08073 10.1641 8.75781 10.1641 9.53906V11.6875H7.70312V14.5H10.1641V21.2578C7.84635 20.8932 5.90625 19.8125 4.34375 18.0156C2.78125 16.1927 2 14.0833 2 11.6875C2 9.00521 2.9375 6.72656 4.8125 4.85156C6.71354 2.95052 9.00521 2 11.6875 2C14.3698 2 16.6484 2.95052 18.5234 4.85156C20.4245 6.72656 21.375 9.00521 21.375 11.6875Z" />
              </SvgIcon>
            </a>
          </div>
          <div className={classes.div}>
            <a
              className={classes.a}
              href="http://instagram.com/weliveglobal"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon className={classes.SvgIcon}>
                <path d="M8.54688 8.58594C9.43229 7.70052 10.5 7.25781 11.75 7.25781C13 7.25781 14.0547 7.70052 14.9141 8.58594C15.7995 9.44531 16.2422 10.5 16.2422 11.75C16.2422 13 15.7995 14.0677 14.9141 14.9531C14.0547 15.8125 13 16.2422 11.75 16.2422C10.5 16.2422 9.43229 15.8125 8.54688 14.9531C7.6875 14.0677 7.25781 13 7.25781 11.75C7.25781 10.5 7.6875 9.44531 8.54688 8.58594ZM9.67969 13.8203C10.2526 14.3932 10.9427 14.6797 11.75 14.6797C12.5573 14.6797 13.2474 14.3932 13.8203 13.8203C14.3932 13.2474 14.6797 12.5573 14.6797 11.75C14.6797 10.9427 14.3932 10.2526 13.8203 9.67969C13.2474 9.10677 12.5573 8.82031 11.75 8.82031C10.9427 8.82031 10.2526 9.10677 9.67969 9.67969C9.10677 10.2526 8.82031 10.9427 8.82031 11.75C8.82031 12.5573 9.10677 13.2474 9.67969 13.8203ZM17.1406 6.35938C17.349 6.54167 17.4531 6.77604 17.4531 7.0625C17.4531 7.34896 17.349 7.59635 17.1406 7.80469C16.9583 8.01302 16.724 8.11719 16.4375 8.11719C16.151 8.11719 15.9036 8.01302 15.6953 7.80469C15.487 7.59635 15.3828 7.34896 15.3828 7.0625C15.3828 6.77604 15.487 6.54167 15.6953 6.35938C15.9036 6.15104 16.151 6.04688 16.4375 6.04688C16.724 6.04688 16.9583 6.15104 17.1406 6.35938ZM20.4609 8.15625C20.487 8.85938 20.5 10.0573 20.5 11.75C20.5 13.4427 20.487 14.6406 20.4609 15.3438C20.3828 16.9323 19.901 18.1693 19.0156 19.0547C18.1562 19.9141 16.9323 20.3698 15.3438 20.4219C14.6406 20.474 13.4427 20.5 11.75 20.5C10.0573 20.5 8.85938 20.474 8.15625 20.4219C6.56771 20.3438 5.34375 19.875 4.48438 19.0156C4.14583 18.7031 3.8724 18.3385 3.66406 17.9219C3.45573 17.5052 3.29948 17.1016 3.19531 16.7109C3.11719 16.3203 3.07812 15.8646 3.07812 15.3438C3.02604 14.6406 3 13.4427 3 11.75C3 10.0573 3.02604 8.84635 3.07812 8.11719C3.15625 6.55469 3.625 5.34375 4.48438 4.48438C5.34375 3.59896 6.56771 3.11719 8.15625 3.03906C8.85938 3.01302 10.0573 3 11.75 3C13.4427 3 14.6406 3.01302 15.3438 3.03906C16.9323 3.11719 18.1562 3.59896 19.0156 4.48438C19.901 5.34375 20.3828 6.56771 20.4609 8.15625ZM18.5859 16.9062C18.6641 16.6979 18.7292 16.4375 18.7812 16.125C18.8333 15.7865 18.8724 15.3958 18.8984 14.9531C18.9245 14.4844 18.9375 14.1068 18.9375 13.8203C18.9375 13.5339 18.9375 13.1302 18.9375 12.6094C18.9375 12.0885 18.9375 11.8021 18.9375 11.75C18.9375 11.6719 18.9375 11.3854 18.9375 10.8906C18.9375 10.3698 18.9375 9.96615 18.9375 9.67969C18.9375 9.39323 18.9245 9.02865 18.8984 8.58594C18.8724 8.11719 18.8333 7.72656 18.7812 7.41406C18.7292 7.07552 18.6641 6.80208 18.5859 6.59375C18.2734 5.78646 17.7135 5.22656 16.9062 4.91406C16.6979 4.83594 16.4245 4.77083 16.0859 4.71875C15.7734 4.66667 15.3828 4.6276 14.9141 4.60156C14.4714 4.57552 14.1068 4.5625 13.8203 4.5625C13.5599 4.5625 13.1562 4.5625 12.6094 4.5625C12.0885 4.5625 11.8021 4.5625 11.75 4.5625C11.6979 4.5625 11.4115 4.5625 10.8906 4.5625C10.3698 4.5625 9.96615 4.5625 9.67969 4.5625C9.39323 4.5625 9.01562 4.57552 8.54688 4.60156C8.10417 4.6276 7.71354 4.66667 7.375 4.71875C7.0625 4.77083 6.80208 4.83594 6.59375 4.91406C5.78646 5.22656 5.22656 5.78646 4.91406 6.59375C4.83594 6.80208 4.77083 7.07552 4.71875 7.41406C4.66667 7.72656 4.6276 8.11719 4.60156 8.58594C4.57552 9.02865 4.5625 9.39323 4.5625 9.67969C4.5625 9.9401 4.5625 10.3438 4.5625 10.8906C4.5625 11.4115 4.5625 11.6979 4.5625 11.75C4.5625 11.8542 4.5625 12.1016 4.5625 12.4922C4.5625 12.8568 4.5625 13.1693 4.5625 13.4297C4.5625 13.6641 4.5625 13.9766 4.5625 14.3672C4.58854 14.7578 4.61458 15.0964 4.64062 15.3828C4.66667 15.6432 4.70573 15.9167 4.75781 16.2031C4.8099 16.4896 4.86198 16.724 4.91406 16.9062C5.2526 17.7135 5.8125 18.2734 6.59375 18.5859C6.80208 18.6641 7.0625 18.7292 7.375 18.7812C7.71354 18.8333 8.10417 18.8724 8.54688 18.8984C9.01562 18.9245 9.38021 18.9375 9.64062 18.9375C9.92708 18.9375 10.3307 18.9375 10.8516 18.9375C11.3984 18.9375 11.6979 18.9375 11.75 18.9375C11.8281 18.9375 12.1146 18.9375 12.6094 18.9375C13.1302 18.9375 13.5339 18.9375 13.8203 18.9375C14.1068 18.9375 14.4714 18.9245 14.9141 18.8984C15.3828 18.8724 15.7734 18.8333 16.0859 18.7812C16.4245 18.7292 16.6979 18.6641 16.9062 18.5859C17.7135 18.2474 18.2734 17.6875 18.5859 16.9062Z" />
              </SvgIcon>
            </a>
          </div>
          <div className={classes.div}>
            <a
              className={classes.a}
              href="https://www.youtube.com/user/weliveglobal"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon className={classes.SvgIcon}>
                <path d="M21.8984 7.34375C21.9766 7.65625 22.0417 8.04688 22.0938 8.51562C22.1719 8.98438 22.224 9.45312 22.25 9.92188C22.276 10.3646 22.2891 10.7812 22.2891 11.1719C22.3151 11.5625 22.3281 11.888 22.3281 12.1484V12.5C22.3281 14.8438 22.1849 16.5755 21.8984 17.6953C21.7682 18.138 21.5339 18.5286 21.1953 18.8672C20.8568 19.2057 20.4531 19.4401 19.9844 19.5703C19.4896 19.7005 18.5521 19.8047 17.1719 19.8828C15.7917 19.9349 14.5286 19.974 13.3828 20H11.6641C7.21094 20 4.4375 19.8568 3.34375 19.5703C2.32812 19.2839 1.6901 18.6589 1.42969 17.6953C1.29948 17.2005 1.19531 16.5234 1.11719 15.6641C1.0651 14.7786 1.02604 14.0365 1 13.4375V12.5C1 10.1823 1.14323 8.46354 1.42969 7.34375C1.5599 6.875 1.79427 6.47135 2.13281 6.13281C2.47135 5.79427 2.875 5.5599 3.34375 5.42969C3.83854 5.29948 4.77604 5.20833 6.15625 5.15625C7.53646 5.07812 8.79948 5.02604 9.94531 5H11.6641C16.1172 5 18.8906 5.14323 19.9844 5.42969C20.4531 5.5599 20.8568 5.79427 21.1953 6.13281C21.5339 6.47135 21.7682 6.875 21.8984 7.34375ZM9.47656 15.7031L15.0625 12.5L9.47656 9.33594V15.7031Z" />
              </SvgIcon>
            </a>
          </div>
          <div className={classes.div}>
            <a
              className={classes.a}
              href="http://linkedin.com/company/weliveglobal"
              target="_blank"
              rel="noreferrer"
            >
              <SvgIcon className={classes.SvgIcon}>
                <path d="M19.25 3C19.5885 3 19.875 3.13021 20.1094 3.39062C20.3698 3.625 20.5 3.91146 20.5 4.25V19.25C20.5 19.5885 20.3698 19.875 20.1094 20.1094C19.875 20.3698 19.5885 20.5 19.25 20.5H4.25C3.91146 20.5 3.61198 20.3698 3.35156 20.1094C3.11719 19.875 3 19.5885 3 19.25V4.25C3 3.91146 3.11719 3.625 3.35156 3.39062C3.61198 3.13021 3.91146 3 4.25 3H19.25ZM8.3125 18V9.64062H5.69531V18H8.3125ZM5.92969 8.07812C6.21615 8.36458 6.56771 8.50781 6.98438 8.50781C7.40104 8.50781 7.7526 8.36458 8.03906 8.07812C8.35156 7.76562 8.50781 7.41406 8.50781 7.02344C8.50781 6.60677 8.35156 6.25521 8.03906 5.96875C7.7526 5.65625 7.40104 5.5 6.98438 5.5C6.56771 5.5 6.21615 5.65625 5.92969 5.96875C5.64323 6.25521 5.5 6.60677 5.5 7.02344C5.5 7.41406 5.64323 7.76562 5.92969 8.07812ZM18 18V13.4297C18 12.8047 17.9609 12.2708 17.8828 11.8281C17.8047 11.3854 17.6615 10.9818 17.4531 10.6172C17.2448 10.2266 16.9193 9.9401 16.4766 9.75781C16.0599 9.54948 15.5391 9.44531 14.9141 9.44531C14.3151 9.44531 13.7943 9.57552 13.3516 9.83594C12.9349 10.0964 12.6354 10.4089 12.4531 10.7734H12.4141V9.64062H9.91406V18H12.5312V13.8594C12.5312 13.2083 12.6354 12.6875 12.8438 12.2969C13.0521 11.9062 13.4557 11.7109 14.0547 11.7109C14.3672 11.7109 14.6276 11.776 14.8359 11.9062C15.0443 12.0365 15.1745 12.2318 15.2266 12.4922C15.3047 12.7526 15.3568 12.987 15.3828 13.1953C15.4089 13.3776 15.4219 13.625 15.4219 13.9375V18H18Z" />
              </SvgIcon>
            </a>
          </div>
        </Container>
      </Hidden>
    </Fragment>
  )
}

export default SideFooter
