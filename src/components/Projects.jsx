import React from 'react';
import images from '../images';

const Project = ({ title, description, stack, images: projectImages, note }) => {
  return (
    <div className="project">
      <h4 className="project-title">{title}</h4>
      <p>{description}</p>
      <p className="project-stack">{stack}</p>
      <div className="project-media">
        <div className="project-media-layout">
          <div className="project-thumb-large" dangerouslySetInnerHTML={{ __html: projectImages[0] }} />
          <div className="project-thumb-small-column">
            <div className="project-thumb-small" dangerouslySetInnerHTML={{ __html: projectImages[1] }} />
            <div className="project-thumb-small" dangerouslySetInnerHTML={{ __html: projectImages[2] }} />
          </div>
        </div>
        <p className="project-media-note">{note}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="container">
      <section className="section">
        <h3>Projects</h3>
        <div className="project-layout">
          <div className="project project-left">
            <Project
              title="Illustration"
              description="依頼された内容のイラスト作成"
              stack="使用ツール: Photoshop, Clip Studio Paint"
              images={[images.illustrationSample1, images.illustrationSample2, images.illustrationSample3]}
              note="画像を images/illustration-sample-1.svg 〜 images/illustration-sample-3.svg に差し替えてください。"
            />
          </div>
          <div className="project-right">
            <Project
              title="CG Modeling"
              description="Mayaを使用したモデリング"
              stack="使用ツール: Maya, Substance Painter"
              images={[images.cgModelingSample1, images.cgModelingSample2, images.cgModelingSample3]}
              note="画像を images/cg-modeling-sample-1.svg 〜 images/cg-modeling-sample-3.svg に差し替えてください。"
            />
            <Project
              title="Character Design"
              description="オリジナルキャラクターのデザイン"
              stack="使用ツール: Procreate"
              images={[images.characterDesignSample1, images.characterDesignSample2, images.characterDesignSample3]}
              note="画像を images/character-design-sample-1.svg 〜 images/character-design-sample-3.svg に差し替えてください。"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;