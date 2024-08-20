import React from "react";
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

function Hero(){
        return <header id="Home" class="container-hero flex">
            <ShaderGradientCanvas
          importedFiber={{ ...fiber, ...drei, ...reactSpring }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -100,
            background: 'black',
        
          }}
        >
          <ShaderGradient 
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%2373bfc4&color2=%23ff810a&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=2.1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=7&uDensity=7&uFrequency=5.5&uSpeed=0.3&uStrength=0&uTime=0&wireframe=false&zoomOut=true"
        //   urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=20.1&color1=%2373bfc4&color2=%23c71f2d&color3=%238da0ce&destination=onCanvas&embedMode=off&envPreset=lobby&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1.1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=plane&uAmplitude=3.2&uDensity=4.4&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false&zoomOut=true" 
        />
          
        </ShaderGradientCanvas>
        <div class="profile">
            <h1 class="hero-h1">RAI</h1>
            <h1 class="hero-h1">ABISKAR.</h1>
            <hr></hr>
              <div class="flex hero-sub">
                <a href="https://drive.google.com/file/d/1-S3Z8w6Fh8PgznO9UVQeDwr6mxEbOHOq/view?usp=sharing" class="button-hero">DOWNLOAD CV</a>
                <hr></hr>
                <div>
                  <h2 class="hero-h2">FRONT- END DEVELOPER</h2>
                </div>
              </div>
            <hr></hr>
        </div>
        {/* <div class="name-absolute">
            <p class="my-name">ABISKAR RAI</p>
        </div> */}
    </header>
    
}

export default Hero;