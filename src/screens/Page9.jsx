import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import ropes from "../assets/videos/ropes.mp4";
import { Flex, Text } from "@chakra-ui/react";

function VideoPlane() {
  const meshRef = useRef();
  const [videoTexture, setVideoTexture] = useState(null);
  const [hoverEffect, setHoverEffect] = useState(0.0);
  const { viewport, size, camera } = useThree();

  useEffect(() => {
    const video = document.createElement("video");
    video.src = ropes;
    video.loop = true;
    video.muted = true;
    video
      .play()
      .then(() => console.log("Video is playing on the 3D object."))
      .catch((error) => console.error("Video play failed:", error));

    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.format = THREE.RGBAFormat;
    setVideoTexture(texture);
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
      meshRef.current.material.uniforms.uHover.value = hoverEffect;
    }
  });

  // Calculate aspect ratio and scale plane accordingly
  const aspect = size.width / size.height;
  const planeWidth = viewport.width;
  const planeHeight = viewport.height;

  return videoTexture ? (
    <mesh
      ref={meshRef}
      scale={[planeWidth, planeHeight, 1]}
      onPointerOver={() => setHoverEffect(1.0)}
      onPointerOut={() => setHoverEffect(0.0)}
    >
      <planeGeometry args={[1, 1, 300, 300]} />
      <shaderMaterial
        uniforms={{
          uTime: { value: 0.0 },
          uHover: { value: hoverEffect },
          uTexture: { value: videoTexture },
        }}
        vertexShader={`
                    varying vec2 vUv;
                    uniform float uHover;
                    void main() {
                        vUv = uv;
                        vec3 pos = position;
                        float wave = sin(pos.x * 10.0 + pos.y * 10.0 + uHover * 5.0) * 0.2 * uHover;
                        pos.z += wave;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                    }
                `}
        fragmentShader={`
                    varying vec2 vUv;
                    uniform sampler2D uTexture;
                    uniform float uHover;
                    float random(vec2 p) {
                        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453123);
                    }
                    void main() {
                        vec4 color = texture2D(uTexture, vUv);
                        float noise = random(vUv * 50.0) * uHover * 0.3;
                        vec3 grayNoise = vec3(noise);
                        gl_FragColor = mix(color, vec4(grayNoise, 1.0), uHover * 0.4);
                    }
                `}
      />
    </mesh>
  ) : null;
}

function App() {
  return (
    <Flex
      position="relative"
      height="100vh"
      width="100%"
      background="transparent"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        color="#ffffff"
        textAlign="center"
        flexDirection="column"
        fontFamily="matterLight"
        fontSize={{base:"10vh", md:"10vw", lg: "12vw" }}
        lineHeight={{ lg: "12vw" }}
        position="absolute"
        background="transparent"
        alignItems="center"
      >
        <Text>Have</Text>
        <Text fontStyle="italic">an Idea ?</Text>

        <Flex
          height={{ base:"10vh", lg: "20vh" }}
          alignItems="center"
          justifyContent="center"
          border="solid white 1px"
          borderRadius="10vh"
          position="relative"
          width={{ base:"90%", md:"50vw", lg: "40vw" }}
          className="page9Btn"
          overflow="hidden"
          zIndex="5"
        >
          <Flex
            width={{ lg: "90%" }}
            height={{base:"10vh", lg: "12vh" }}
            flexDirection="column"
            alignItems="center"
            overflow="hidden"    zIndex="5"  
          >
            <Text fontSize={{base:"8vh", lg: "12vh" }} className="page9Text"  color="#ffffff" lineHeight={{ base:"10vh", lg: "12vh" }} >
              TELL US
            </Text>
            <Text fontSize={{base:"8vh", lg: "12vh" }}  color="#111111" className="page9Text" lineHeight={{ base:"10vh", lg: "12vh" }} >
              TELL US
            </Text>
          </Flex>
          <span className="page9Hover"></span>
        </Flex>
      </Flex>

      <Canvas camera={{ position: [0, 0, 1], fov: 75 }} id="canvas">
        <VideoPlane />
      </Canvas>
    </Flex>
  );
}

export default App;
