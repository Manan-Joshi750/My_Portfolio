import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  /* Explicitly center the Coding Profiles section vertically */
  &#coding-profiles {
    align-items: center; 
    
    .about-image {
      margin-top: 0; 
      
      img {
        margin-top: 0; 
      }
    }
  }

  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  .about-image {
    text-align: center;

    img {
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  .experience {
    margin-top: 2rem;

    div {
      margin-bottom: 2rem;
    }
  }

  /* WOW Enhancements for Coding Profiles Section */
  .profiles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .profile-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 1.5rem;
    text-align: left;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      margin-top: 0;
      font-size: 2rem;
      color: #ffffff;
      letter-spacing: 0.05rem;
    }

    .stats {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;

      .number {
        font-size: 2.8rem;
        font-weight: 700;
        color: #ffffff;
      }

      .label {
        font-size: 1.4rem;
        font-weight: 400;
        color: #aaaaaa;
      }
    }

    .badge {
      font-size: 1.6rem;
      font-weight: 600;
      margin: 0;
      
      span {
        font-size: 1.4rem;
        color: #aaaaaa;
        font-weight: 400;
      }
    }

    &:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.05);
    }

    &.leetcode:hover {
      box-shadow: 0 10px 20px -10px rgba(255, 161, 22, 0.5);
      border-color: rgba(255, 161, 22, 0.8);
    }

    &.codechef:hover {
      box-shadow: 0 10px 20px -10px rgba(87, 13, 216, 0.5);
      border-color: rgba(87, 13, 216, 0.8);
    }

    &.codeforces:hover {
      box-shadow: 0 10px 20px -10px rgba(0, 255, 208, 0.5);
      border-color: rgba(0, 255, 208, 0.8);
    }

    &.gfg:hover {
      box-shadow: 0 10px 20px -10px rgba(47, 141, 70, 0.5); 
      border-color: rgba(47, 141, 70, 0.8);
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;

      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }

    .about-image {
      display: flex;
      max-width: 100%;

      img {
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
`;