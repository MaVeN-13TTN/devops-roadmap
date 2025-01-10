class Confetti {
    constructor() {
        this.colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.animationId = null;
    }

    createCanvas() {
        // Create canvas if it doesn't exist
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.canvas.style.position = 'fixed';
            this.canvas.style.top = '0';
            this.canvas.style.left = '0';
            this.canvas.style.width = '100%';
            this.canvas.style.height = '100%';
            this.canvas.style.pointerEvents = 'none';
            this.canvas.style.zIndex = '9999';
            document.body.appendChild(this.canvas);
            this.ctx = this.canvas.getContext('2d');
        }

        // Set canvas size
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle(x, y) {
        return {
            x,
            y,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            size: Math.random() * 10 + 5,
            speedX: Math.random() * 6 - 3,
            speedY: Math.random() * -15 - 5,
            gravity: 0.5,
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5,
            opacity: 1
        };
    }

    animate() {
        if (!this.ctx || this.particles.length === 0) {
            this.cleanup();
            return;
        }

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];

            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            particle.speedY += particle.gravity;
            particle.rotation += particle.rotationSpeed;
            particle.opacity -= 0.01;

            // Draw particle
            this.ctx.save();
            this.ctx.translate(particle.x, particle.y);
            this.ctx.rotate((particle.rotation * Math.PI) / 180);
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fillStyle = particle.color;
            this.ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
            this.ctx.restore();

            // Remove particles that are off screen or fully transparent
            if (particle.opacity <= 0 || 
                particle.y > this.canvas.height || 
                particle.x < -particle.size || 
                particle.x > this.canvas.width + particle.size) {
                this.particles.splice(i, 1);
            }
        }

        this.animationId = requestAnimationFrame(() => this.animate());
    }

    cleanup() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        if (this.canvas) {
            this.canvas.remove();
            this.canvas = null;
            this.ctx = null;
        }
        this.particles = [];
    }

    shoot(x, y, particleCount = 50) {
        this.createCanvas();
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            this.particles.push(this.createParticle(x, y));
        }

        // Start animation if not already running
        if (!this.animationId) {
            this.animate();
        }

        // Cleanup after animation
        setTimeout(() => {
            if (this.particles.length === 0) {
                this.cleanup();
            }
        }, 5000);
    }
}

// Create a singleton instance
const confetti = new Confetti();

// Export the instance
export { confetti };
