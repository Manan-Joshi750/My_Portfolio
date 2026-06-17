import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  
  .projects{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      padding: 2rem 1.8rem;
      /* Glassmorphism styling */
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 1.2rem;
      transition: all 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      
      /* Upgraded hover effect with green glow */
      &:hover{
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.05);
        border-color: #23ce6b; 
        box-shadow: 0 10px 20px -10px rgba(35, 206, 107, 0.5);
      }

      header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;
        
        .project-links{
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        a > img {
          width: 5.0rem;
        }
      }
      
      h3{
        margin-bottom: 2rem;
        font-size: 2.2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        font-size: 1.6rem;
        line-height: 1.5;
        color: #d4d4d4; /* Slightly dimmed for modern contrast */
        
        a{
          color: #FFFF;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;
          &:hover{
            color: var(--green);
          }
        }
      }

      footer{
        margin-top: auto;
        
        .tech-list{
          display: flex;
          align-items: center;
          flex-wrap: wrap; /* Prevents overflow if tech list is long */
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.8;
          color: #aaaaaa;
        }
      }
    }
  }

  @media (max-width: 960px){
    .projects{
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px){
    .projects{
      grid-template-columns: 1fr;
    }
  }
`;