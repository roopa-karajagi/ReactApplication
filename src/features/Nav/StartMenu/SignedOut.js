import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

export const SignedOut = ({signedIn}) => {
    return (
        <Menu.Item position="right">
        <Button onClick={signedIn} basic inverted content="Login" />
        <Button
          basic 
          inverted
          content="Register"
          style={{ marginLeft: "0.5em" }}
        />
      </Menu.Item>
    )
}
