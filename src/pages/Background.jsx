import {useEffect, useRef} from "react";

const Background = () => {
    const canvasRef = useRef(null);
    const numNodes = 20;
    const nodes = useRef([]);
    const lines = useRef([]);

    const createNode = (width, height) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 5 + 3,
        color: 'rgb(0, 176, 240)',
        opacity: 0,
        fadeSpeed: 0.02 + Math.random() * 0.03,
        isFadingIn: true,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
    });

    const drawNode = (
        ctx,
        node
    ) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = node.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
    };

    const updateNode = (
        node,
        width,
        height
    ) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x + node.radius > width || node.x - node.radius < 0) {
            node.vx = -node.vx;
        }
        if (node.y + node.radius > height || node.y - node.radius < 0) {
            node.vy = -node.vy;
        }

        if (node.isFadingIn) {
            node.opacity += node.fadeSpeed;
            if (node.opacity >= 1) {
                node.opacity = 1;
                node.isFadingIn = false;
            }
        }
    };

    const drawLine = (
        ctx,
        node1,
        node2,
        color,
        opacity
    ) => {
        ctx.beginPath();
        ctx.moveTo(node1.x, node1.y);
        ctx.lineTo(node2.x, node2.y);
        ctx.strokeStyle = color;
        ctx.globalAlpha = opacity;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.globalAlpha = 1;
    };

    const updateLines = (
        ctx,
        currentNodes
    ) => {
        lines.current.length = 0;
        const maxDistance = 150;
        const numConnections = 3;

        for (let i = 0; i < currentNodes.length; i++) {
            const node1 = currentNodes[i];
            let connections = 0;

            const distances = [];
            for (let j = 0; j < currentNodes.length; j++) {
                if (i !== j) {
                    const node2 = currentNodes[j];
                    const dx = node1.x - node2.x;
                    const dy = node1.y - node2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    distances.push({ distance, node: node2, index: j }); // Almacenar el índice
                }
            }

            distances.sort((a, b) => a.distance - b.distance);

            for (let j = 0; j < distances.length && connections < numConnections; j++) {
                const { distance, node: node2, index: node2Index } = distances[j]; // Obtener el índice
                if (distance < maxDistance) {
                    let opacity = 1 - distance / maxDistance;
                    if (opacity < 0) opacity = 0;
                    const color = node1.color;
                    drawLine(ctx, node1, node2, color, opacity);
                    lines.current.push({ start: i, end: node2Index }); // Usar índices en lugar de objetos nodo
                    connections++;
                }
            }
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const updateDimensions = () => {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        for (let i = 0; i < numNodes; i++) {
            nodes.current.push(createNode(canvas.width, canvas.height));
        }

        const animate = () => {
            if (!canvasRef.current) return;
            const canvas = canvasRef.current;
            const ctx = canvasRef.current?.getContext('2d');
            if (!ctx) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            nodes.current.forEach(node => {
                drawNode(ctx, node);
                updateNode(node, canvas.width, canvas.height);
            });
            updateLines(ctx, nodes.current);
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    });
    return <canvas ref={canvasRef} id="backgroundCanvas" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
    }}></canvas>
}
export default Background;