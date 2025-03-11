function Info()
{
    return(
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your Name - Portfolio</title>
            <style>
                /* Base Styles */
                :root {
                    --primary-color: #4361ee;
                    --secondary-color: #3a0ca3;
                    --accent-color: #f72585;
                    --text-color: #2b2d42;
                    --light-color: #f8f9fa;
                    --dark-color: #212529;
                    --transition: all 0.3s ease;
                }
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                    line-height: 1.6;
                    color: var(--text-color);
                    background-color: var(--light-color);
                }
                
                a {
                    text-decoration: none;
                    color: var(--primary-color);
                    transition: var(--transition);
                }
                
                a:hover {
                    color: var(--secondary-color);
                }
                
                h1, h2, h3, h4 {
                    margin-bottom: 1rem;
                    line-height: 1.2;
                }
                
                p {
                    margin-bottom: 1rem;
                }
                
                img {
                    max-width: 100%;
                    height: auto;
                    display: block;
                }
                
                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .btn {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: var(--primary-color);
                    color: white;
                    border-radius: 5px;
                    font-weight: 500;
                    transition: var(--transition);
                    cursor: pointer;
                    border: none;
                }
                
                .btn:hover {
                    background-color: var(--secondary-color);
                    transform: translateY(-2px);
                    color: white;
                }
                
                .btn-secondary {
                    background-color: transparent;
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                
                .btn-secondary:hover {
                    background-color: var(--primary-color);
                    color: white;
                }
                
                section {
                    padding: 5rem 0;
                }
                
                /* Header Styles */
                header {
                    padding: 1.5rem 0;
                    position: fixed;
                    width: 100%;
                    z-index: 1000;
                    background-color: rgba(248, 249, 250, 0.95);
                    backdrop-filter: blur(5px);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary-color);
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    list-style: none;
                }
                
                .nav-links a {
                    font-weight: 500;
                    position: relative;
                }
                
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: var(--primary-color);
                    transition: var(--transition);
                }
                
                .nav-links a:hover::after {
                    width: 100%;
                }
                
                /* Hero Section */
                .hero {
                    padding: 8rem 0 5rem;
                    background-color: var(--light-color);
                    position: relative;
                    overflow: hidden;
                }
                
                .hero-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 2rem;
                }
                
                .hero-text {
                    flex: 1;
                }
                
                .hero-text h1 {
                    font-size: 3.5rem;
                    margin-bottom: 1rem;
                    line-height: 1.1;
                }
                
                .hero-text p {
                    font-size: 1.25rem;
                    margin-bottom: 2rem;
                    color: #666;
                }
                
                .hero-image {
                    flex: 1;
                    position: relative;
                }
                
                .hero-image img {
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }
                
                .hero-buttons {
                    display: flex;
                    gap: 1rem;
                }
                
                /* Projects Section */
                .projects {
                    background-color: #fff;
                }
                
                .section-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }
                
                .section-header h2 {
                    font-size: 2.5rem;
                    position: relative;
                    display: inline-block;
                }
                
                .section-header h2::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 50px;
                    height: 3px;
                    background-color: var(--primary-color);
                }
                
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 2rem;
                }
                
                .project-card {
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    transition: var(--transition);
                }
                
                .project-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
                }
                
                .project-image {
                    height: 200px;
                    background-color: #eee;
                    position: relative;
                    overflow: hidden;
                }
                
                .project-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(67, 97, 238, 0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: var(--transition);
                }
                
                .project-card:hover .project-overlay {
                    opacity: 1;
                }
                
                .project-content {
                    padding: 1.5rem;
                }
                
                .project-content h3 {
                    margin-bottom: 0.5rem;
                }
                
                .project-content p {
                    color: #666;
                    margin-bottom: 1.5rem;
                }
                
                .project-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }
                
                .project-tag {
                    background-color: #f0f0f0;
                    padding: 0.25rem 0.75rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    color: #555;
                }
                
                /* About Section */
                .about {
                    background-color: #f9f9f9;
                }
                
                .about-content {
                    display: flex;
                    align-items: center;
                    gap: 3rem;
                }
                
                .about-image {
                    flex: 1;
                }
                
                .about-image img {
                    border-radius: 10px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                }
                
                .about-text {
                    flex: 1;
                }
                
                .about-text h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                }
                
                /* Skills Section */
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 2rem;
                }
                
                .skill-card {
                    background-color: white;
                    padding: 2rem;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                    text-align: center;
                    transition: var(--transition);
                }
                
                .skill-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                }
                
                .skill-icon {
                    font-size: 2.5rem;
                    color: var(--primary-color);
                    margin-bottom: 1rem;
                }
                
                /* Testimonials Section */
                .testimonials {
                    background-color: #fff;
                }
                
                .testimonials-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2rem;
                }
                
                .testimonial-card {
                    background-color: #f9f9f9;
                    padding: 2rem;
                    border-radius: 10px;
                    position: relative;
                }
                
                .testimonial-card::before {
                    content: '"';
                    position: absolute;
                    top: 10px;
                    left: 20px;
                    font-size: 5rem;
                    color: rgba(67, 97, 238, 0.2);
                    font-family: serif;
                    line-height: 1;
                }
                
                .testimonial-content {
                    margin-bottom: 1.5rem;
                }
                
                .testimonial-author {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                .testimonial-avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #eee;
                    overflow: hidden;
                }
                
                .testimonial-info h4 {
                    margin-bottom: 0.25rem;
                }
                
                .testimonial-info p {
                    color: #666;
                    font-size: 0.9rem;
                    margin-bottom: 0;
                }
                
                /* Contact Section */
                .contact {
                    background-color: #f9f9f9;
                }
                
                .contact-content {
                    display: flex;
                    gap: 3rem;
                }
                
                .contact-info {
                    flex: 1;
                }
                
                .contact-info h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1.5rem;
                }
                
                .contact-detail {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }
                
                .contact-icon {
                    width: 50px;
                    height: 50px;
                    background-color: var(--primary-color);
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-size: 1.5rem;
                }
                
                .contact-form {
                    flex: 1;
                    background-color: white;
                    padding: 2rem;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
                }
                
                .form-group {
                    margin-bottom: 1.5rem;
                }
                
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                }
                
                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    font-family: inherit;
                }
                
                .form-group textarea {
                    height: 150px;
                    resize: vertical;
                }
                
                /* Footer */
                footer {
                    background-color: var(--dark-color);
                    color: white;
                    padding: 3rem 0;
                }
                
                .footer-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                }
                
                .footer-social {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-icon {
                    width: 40px;
                    height: 40px;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: var(--transition);
                }
                
                .social-icon:hover {
                    background-color: var(--primary-color);
                    transform: translateY(-5px);
                }
                
                .footer-bottom {
                    margin-top: 2rem;
                    text-align: center;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                /* Responsive Styles */
                @media (max-width: 992px) {
                    .hero-content, .about-content, .contact-content {
                        flex-direction: column;
                    }
                    
                    .hero-text h1 {
                        font-size: 2.5rem;
                    }
                    
                    .about-image, .about-text {
                        flex: none;
                        width: 100%;
                    }
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .projects-grid, .testimonials-grid, .skills-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        </head>
        <body>
            <!-- Header -->
            <header>
                <div class="container">
                    <nav>
                        <a href="#" class="logo">YourName</a>
                        <ul class="nav-links">
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
            <!-- Hero Section -->
            <section class="hero">
                <div class="container">
                    <div class="hero-content">
                        <div class="hero-text">
                            <h1>Hi, I'm [Your Name]<br>I create <span style="color: var(--primary-color);">[what you do]</span></h1>
                            <p>[Your tagline or brief description that captures your unique value proposition]</p>
                            <div class="hero-buttons">
                                <a href="#projects" class="btn">View My Work</a>
                                <a href="#contact" class="btn btn-secondary">Get In Touch</a>
                            </div>
                        </div>
                        <div class="hero-image">
                            <img src="/api/placeholder/400/320" alt="Your professional photo">
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Projects Section -->
            <section id="projects" class="projects">
                <div class="container">
                    <div class="section-header">
                        <h2>Featured Projects</h2>
                        <p>Here are some of my best works</p>
                    </div>
                    <div class="projects-grid">
                        <!-- Project 1 -->
                        <div class="project-card">
                            <div class="project-image">
                                <img src="/api/placeholder/400/200" alt="Project 1">
                                <div class="project-overlay">
                                    <a href="#" class="btn">View Project</a>
                                </div>
                            </div>
                            <div class="project-content">
                                <h3>Project Title 1</h3>
                                <div class="project-tags">
                                    <span class="project-tag">Tag 1</span>
                                    <span class="project-tag">Tag 2</span>
                                    <span class="project-tag">Tag 3</span>
                                </div>
                                <p>Brief description of the project highlighting key features and your role.</p>
                                <a href="#" class="btn btn-secondary">Learn More</a>
                            </div>
                        </div>
                        
                        <!-- Project 2 -->
                        <div class="project-card">
                            <div class="project-image">
                                <img src="/api/placeholder/400/200" alt="Project 2">
                                <div class="project-overlay">
                                    <a href="#" class="btn">View Project</a>
                                </div>
                            </div>
                            <div class="project-content">
                                <h3>Project Title 2</h3>
                                <div class="project-tags">
                                    <span class="project-tag">Tag 1</span>
                                    <span class="project-tag">Tag 2</span>
                                </div>
                                <p>Brief description of the project highlighting key features and your role.</p>
                                <a href="#" class="btn btn-secondary">Learn More</a>
                            </div>
                        </div>
                        
                        <!-- Project 3 -->
                        <div class="project-card">
                            <div class="project-image">
                                <img src="/api/placeholder/400/200" alt="Project 3">
                                <div class="project-overlay">
                                    <a href="#" class="btn">View Project</a>
                                </div>
                            </div>
                            <div class="project-content">
                                <h3>Project Title 3</h3>
                                <div class="project-tags">
                                    <span class="project-tag">Tag 1</span>
                                    <span class="project-tag">Tag 2</span>
                                    <span class="project-tag">Tag 3</span>
                                </div>
                                <p>Brief description of the project highlighting key features and your role.</p>
                                <a href="#" class="btn btn-secondary">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- About Section -->
            <section id="about" class="about">
                <div class="container">
                    <div class="about-content">
                        <div class="about-image">
                            <img src="/api/placeholder/400/400" alt="About me image">
                        </div>
                        <div class="about-text">
                            <h2>About Me</h2>
                            <p>Hello! I'm [Your Name], a [Your Profession] based in [Your Location]. I specialize in [Your Specialization] with [X years] of experience.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, nisl eu aliquet ultricies, velit urna auctor eros, vel fringilla nisl magna vel mauris. Sed vel vestibulum neque, vel malesuada ligula.</p>
                            <p>When I'm not [Working], you can find me [Your Hobbies/Interests].</p>
                            <a href="#" class="btn">Download CV</a>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Skills Section -->
            <section id="skills" class="skills">
                <div class="container">
                    <div class="section-header">
                        <h2>My Skills</h2>
                        <p>Here's what I bring to the table</p>
                    </div>
                    <div class="skills-grid">
                        <!-- Skill 1 -->
                        <div class="skill-card">
                            <div class="skill-icon">📱</div>
                            <h3>Skill 1</h3>
                            <p>Brief description of your expertise in this skill.</p>
                        </div>
                        
                        <!-- Skill 2 -->
                        <div class="skill-card">
                            <div class="skill-icon">💻</div>
                            <h3>Skill 2</h3>
                            <p>Brief description of your expertise in this skill.</p>
                        </div>
                        
                        <!-- Skill 3 -->
                        <div class="skill-card">
                            <div class="skill-icon">🎨</div>
                            <h3>Skill 3</h3>
                            <p>Brief description of your expertise in this skill.</p>
                        </div>
                        
                        <!-- Skill 4 -->
                        <div class="skill-card">
                            <div class="skill-icon">📊</div>
                            <h3>Skill 4</h3>
                            <p>Brief description of your expertise in this skill.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Testimonials Section -->
            <section id="testimonials" class="testimonials">
                <div class="container">
                    <div class="section-header">
                        <h2>Testimonials</h2>
                        <p>What people say about my work</p>
                    </div>
                    <div class="testimonials-grid">
                        <!-- Testimonial 1 -->
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, nisl eu aliquet ultricies, velit urna auctor eros, vel fringilla nisl magna vel mauris.</p>
                            </div>
                            <div class="testimonial-author">
                                <div class="testimonial-avatar">
                                    <img src="/api/placeholder/50/50" alt="Client 1">
                                </div>
                                <div class="testimonial-info">
                                    <h4>Client Name</h4>
                                    <p>Position, Company</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Testimonial 2 -->
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, nisl eu aliquet ultricies, velit urna auctor eros, vel fringilla nisl magna vel mauris.</p>
                            </div>
                            <div class="testimonial-author">
                                <div class="testimonial-avatar">
                                    <img src="/api/placeholder/50/50" alt="Client 2">
                                </div>
                                <div class="testimonial-info">
                                    <h4>Client Name</h4>
                                    <p>Position, Company</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Testimonial 3 -->
                        <div class="testimonial-card">
                            <div class="testimonial-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque, nisl eu aliquet ultricies, velit urna auctor eros, vel fringilla nisl magna vel mauris.</p>
                            </div>
                            <div class="testimonial-author">
                                <div class="testimonial-avatar">
                                    <img src="/api/placeholder/50/50" alt="Client 3">
                                </div>
                                <div class="testimonial-info">
                                    <h4>Client Name</h4>
                                    <p>Position, Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Contact Section -->
            <section id="contact" class="contact">
                <div class="container">
                    <div class="section-header">
                        <h2>Get In Touch</h2>
                        <p>Let's discuss your project</p>
                    </div>
                    <div class="contact-content">
                        <div class="contact-info">
                            <h2>Contact Information</h2>
                            <p>Feel free to reach out to me through any of these channels. I'm currently [available/unavailable] for new projects.</p>
                            
                            <div class="contact-detail">
                                <div class="contact-icon">✉️</div>
                                <div>
                                    <h4>Email</h4>
                                    <p>your.email@example.com</p>
                                </div>
                            </div>
                            
                            <div class="contact-detail">
                                <div class="contact-icon">📱</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+1 (123) 456-7890</p>
                                </div>
                            </div>
                            
                            <div class="contact-detail">
                                <div class="contact-icon">📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>City, Country</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="contact-form">
                            <form>
                                <div class="form-group">
                                    <label for="name">Your Name</label>
                                    <input type="text" id="name" name="name" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="email">Your Email</label>
                                    <input type="email" id="email" name="email" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="message">Your Message</label>
                                    <textarea id="message" name="message" required></textarea>
                                </div>
                                
                                <button type="submit" class="btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Footer -->
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <a href="#" class="footer-logo">YourName</a>
                        <div class="footer-social">
                            <a href="#" class="social-icon">📘</a>
                            <a href="#" class="social-icon">📱</a>
                            <a href="#" class="social-icon">📷</a>
                            <a href="#" class="social-icon">📌</a>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2025 YourName. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </body>
        </html>
    )
}