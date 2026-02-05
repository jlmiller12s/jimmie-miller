// GSAP Tunnel Scroll Animation
// Scroll through the tunnel to reveal portfolio

var Mathutils = {
    normalize: function($value, $min, $max) {
        return ($value - $min) / ($max - $min);
    },
    interpolate: function($normValue, $min, $max) {
        return $min + ($max - $min) * $normValue;
    },
    map: function($value, $min1, $max1, $min2, $max2) {
        if ($value < $min1) {
            $value = $min1;
        }
        if ($value > $max1) {
            $value = $max1;
        }
        var res = this.interpolate(this.normalize($value, $min1, $max1), $min2, $max2);
        return res;
    }
};

// Wait for page to load
window.addEventListener('load', function() {
    document.body.classList.add('intro-active');
    initTunnelAnimation();
});

function initTunnelAnimation() {
    // Get window size
    var ww = window.innerWidth,
        wh = window.innerHeight;

    var composer, params = {
        exposure: 1.3,
        bloomStrength: .9,
        bloomThreshold: 0,
        bloomRadius: 0
    };

    // Create a WebGL renderer
    var renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector(".intro-canvas"),
        antialias: true,
        alpha: true
    });
    renderer.setSize(ww, wh);

    // Create an empty scene
    var scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 0, 100);

    // Create a perspective camera
    var cameraRotationProxyX = 3.14159;
    var cameraRotationProxyY = 0;

    var camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
    camera.rotation.y = cameraRotationProxyX;
    camera.rotation.z = cameraRotationProxyY;

    var c = new THREE.Group();
    c.position.z = 400;

    c.add(camera);
    scene.add(c);

    // Array of points for the tunnel path
    var points = [
        [10, 89, 0],
        [50, 88, 10],
        [76, 139, 20],
        [126, 141, 12],
        [150, 112, 8],
        [157, 73, 0],
        [180, 44, 5],
        [207, 35, 10],
        [232, 36, 0]
    ];

    var p1, p2;

    // Convert the array of points into vertices
    for (var i = 0; i < points.length; i++) {
        var x = points[i][0];
        var y = points[i][2];
        var z = points[i][1];
        points[i] = new THREE.Vector3(x, y, z);
    }

    // Create a path from the points
    var path = new THREE.CatmullRomCurve3(points);
    path.tension = .5;

    // Create tunnel geometry
    var geometry = new THREE.TubeGeometry(path, 300, 4, 32, false);

    var texture = new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/3d_space_5.jpg', function(texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set(0, 0);
        texture.repeat.set(15, 2);
    });

    var mapHeight = new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/waveform-bump3.jpg', function(texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set(0, 0);
        texture.repeat.set(15, 2);
    });

    var material = new THREE.MeshPhongMaterial({
        side: THREE.BackSide,
        map: texture,
        shininess: 20,
        bumpMap: mapHeight,
        bumpScale: -.03,
        specular: 0x00ff88
    });

    // Create tunnel mesh
    var tube = new THREE.Mesh(geometry, material);
    scene.add(tube);

    // Inner tube wireframe
    var geometry2 = new THREE.TubeGeometry(path, 150, 3.4, 32, false);
    var geo = new THREE.EdgesGeometry(geometry2);

    var mat = new THREE.LineBasicMaterial({
        color: 0x00ff88,
        linewidth: 2,
        opacity: .3,
        transparent: true
    });

    var wireframe = new THREE.LineSegments(geo, mat);
    scene.add(wireframe);

    // Create a point light
    var light = new THREE.PointLight(0xffffff, .35, 4, 0);
    light.castShadow = true;
    scene.add(light);

    // Particle system (Updated for Three.js r128)
    var spikeyTexture = new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/spikey.png');

    var particleCount = 6800;
    var pMaterial = new THREE.PointsMaterial({
        color: 0x00ff88,
        size: .5,
        map: spikeyTexture,
        transparent: true,
        blending: THREE.AdditiveBlending
    });

    // Create particles using BufferGeometry
    var positions1 = new Float32Array(particleCount * 3);
    var positions2 = new Float32Array(particleCount * 3);
    var positions3 = new Float32Array(particleCount * 3);

    for (var p = 0; p < particleCount; p++) {
        var i = p * 3;
        positions1[i] = Math.random() * 500 - 250;
        positions1[i + 1] = Math.random() * 50 - 25;
        positions1[i + 2] = Math.random() * 500 - 250;
    }

    for (var p = 0; p < particleCount; p++) {
        var i = p * 3;
        positions2[i] = Math.random() * 500;
        positions2[i + 1] = Math.random() * 10 - 5;
        positions2[i + 2] = Math.random() * 500;
    }

    for (var p = 0; p < particleCount; p++) {
        var i = p * 3;
        positions3[i] = Math.random() * 500;
        positions3[i + 1] = Math.random() * 10 - 5;
        positions3[i + 2] = Math.random() * 500;
    }

    var particles1 = new THREE.BufferGeometry();
    particles1.setAttribute('position', new THREE.BufferAttribute(positions1, 3));

    var particles2 = new THREE.BufferGeometry();
    particles2.setAttribute('position', new THREE.BufferAttribute(positions2, 3));

    var particles3 = new THREE.BufferGeometry();
    particles3.setAttribute('position', new THREE.BufferAttribute(positions3, 3));

    var particleSystem1 = new THREE.Points(particles1, pMaterial);
    var particleSystem2 = new THREE.Points(particles2, pMaterial);
    var particleSystem3 = new THREE.Points(particles3, pMaterial);

    scene.add(particleSystem1);
    scene.add(particleSystem2);
    scene.add(particleSystem3);

    function updateCameraPercentage(percentage) {
        p1 = path.getPointAt(percentage % 1);
        p2 = path.getPointAt((percentage + 0.03) % 1);

        c.position.set(p1.x, p1.y, p1.z);
        c.lookAt(p2);
        light.position.set(p2.x, p2.y, p2.z);
    }

    var cameraTargetPercentage = 0;
    var currentCameraPercentage = 0;

    // GSAP ScrollTrigger setup
    gsap.registerPlugin(ScrollTrigger);

    var tubePerc = {
        percent: 0
    };

    var portfolioRevealed = false;
    var tl = null;

    // GSAP ScrollTrigger setup (using window scroll, not container)
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(function() {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".scroll-target",
                start: "top top",
                end: "bottom 100%",
                scrub: 2,
                onUpdate: (self) => {
                    console.log('Scroll progress:', self.progress);
                    // When scroll reaches end, reveal portfolio
                    if (self.progress > 0.95 && !portfolioRevealed) {
                        revealPortfolio();
                    }
                }
            }
        });

        tl.to(tubePerc, {
            percent: 0.96,
            ease: "none",
            duration: 10,
            onUpdate: function() {
                cameraTargetPercentage = tubePerc.percent;
            }
        });
        
        console.log('ScrollTrigger initialized');
        ScrollTrigger.refresh();
    }, 100);

    function revealPortfolio() {
        if (portfolioRevealed) return;
        portfolioRevealed = true;

        const introCanvas = document.getElementById('intro-canvas');
        const introText = document.getElementById('intro-text');
        const skipBtn = document.getElementById('skip-intro');
        const vignette = document.getElementById('intro-vignette');
        const scrollTarget = document.querySelector('.scroll-target');
        const mainContent = document.getElementById('main-content');
        
        // Kill all ScrollTriggers
        ScrollTrigger.getAll().forEach(st => st.kill());
        
        // Fade out all intro elements
        gsap.to([introCanvas, introText, skipBtn, vignette], {
            opacity: 0,
            duration: 1,
            onComplete: function() {
                introCanvas.style.display = 'none';
                introText.style.display = 'none';
                skipBtn.style.display = 'none';
                vignette.style.display = 'none';
                scrollTarget.style.display = 'none';
                
                mainContent.style.display = 'block';
                document.body.classList.remove('intro-active');
                window.scrollTo(0, 0);
                
                gsap.from(mainContent, {
                    opacity: 0,
                    duration: 1,
                    onComplete: function() {
                        // Initialize the background Three.js scene
                        if (window.initBackgroundScene) {
                            window.initBackgroundScene();
                        }
                        // Initialize custom cursor
                        if (window.initCustomCursor) {
                            window.initCustomCursor();
                        }
                    }
                });
            }
        });
    }

    // Skip button functionality - add small delay to ensure element exists
    setTimeout(function() {
        var skipBtn = document.getElementById('skip-intro');
        if (skipBtn) {
            console.log('Skip button found, adding event listener');
            skipBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Skip button clicked');
                revealPortfolio();
            });
        } else {
            console.log('Skip button not found');
        }
    }, 100);

    function render() {
        currentCameraPercentage = cameraTargetPercentage;

        camera.rotation.y += (cameraRotationProxyX - camera.rotation.y) / 15;
        camera.rotation.x += (cameraRotationProxyY - camera.rotation.x) / 15;

        updateCameraPercentage(currentCameraPercentage);

        // Animate particles
        particleSystem1.rotation.y += 0.0001;
        particleSystem2.rotation.x += 0.00025;
        particleSystem3.rotation.z += 0.00005;

        // Render the scene
        renderer.render(scene, camera);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);

    // Mouse movement for subtle camera control
    document.addEventListener('mousemove', function(evt) {
        cameraRotationProxyX = Mathutils.map(evt.clientX, 0, window.innerWidth, 3.24, 3.04);
        cameraRotationProxyY = Mathutils.map(evt.clientY, 0, window.innerHeight, -0.1, 0.1);
    });

    // Window resize
    window.addEventListener('resize', function() {
        var width = window.innerWidth;
        var height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    }, false);
}
