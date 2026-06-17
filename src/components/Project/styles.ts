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
      background-color: #2b2b2b; /* Back to your original dark card */
      border-radius: 1.2rem;
      border: 1px solid transparent;
      
      /* Super smooth bouncy "spring" animation */
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      
      /* THE COOL UPGRADE: Lift, Scale, Pink Fill, and Neon Shadow */
      &:hover{
        transform: translateY(-12px) scale(1.03);
        background-color: var(--pink);
        border-color: var(--pink);
        box-shadow: 0 18px 40px -10px var(--pink);
        z-index: 10;
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
        
        /* Added a playful pop to the GitHub icon on hover */
        a > img {
          width: 5.0rem;
          transition: transform 0.3s ease;
          &:hover {
            transform: scale(1.2) rotate(5deg);
          }
        }
      }
      
      h3{
        margin-bottom: 2rem;
      }

      p{
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
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
          flex-wrap: wrap; /* Keeps it safe on mobile */
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          transition: all 0.3s ease;
        }
      }

      /* Make the tech stack pop clearly when the background turns pink */
      &:hover footer .tech-list {
        opacity: 1;
        color: #ffffff;
        font-weight: 500;
        text-shadow: 0px 1px 2px rgba(0,0,0,0.2);
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