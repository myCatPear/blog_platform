import React, { FC, useState } from 'react';

import style from './SpecificBlogDescription.module.scss';

import { ReactComponent as ArrowDown } from 'assets/img/blog/arrowDown.svg';
import { ReactComponent as ArrowUP } from 'assets/img/blog/arrowUp.svg';
import { ReactComponent as ChooseAvatarSVG } from 'assets/img/blog/blog.svg';
import { ReactComponent as ChoosePreviewPictureSVG } from 'assets/img/blog/photo_size_select_actual.svg';
import commonStyle from 'common/style/CommonStyle.module.scss';
import { cutString } from 'utils/cutString';

export const SpecificBlogDescription: FC = () => {
  const [isClickShowMoreText, setIsClickShowMoreText] = useState(false);
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus esse, iste pariatur quas ratione? Accusantium architecto commodi consectetur delectus distinctio dolorem fuga fugit ipsa natus nemo odio quas qui, quia ratione sed sit, tempore voluptatibus. Architecto aspernatur, autem consequatur dignissimos dolorum et facilis fugiat illum laborum mollitia nobis non porro possimus quia quod, ratione reprehenderit ut velit vitae voluptatibus. Accusantium, architecto deleniti eius, eos excepturi itaque iusto libero nam nesciunt odit optio quam quis rem suscipit voluptatum. Aspernatur cumque deleniti distinctio dolor, dolorum eaque eius hic inventore ipsam labore libero nostrum numquam quod quos reprehenderit voluptates voluptatibus. Accusantium alias aliquam aliquid amet aperiam asperiores at autem consectetur consequuntur dignissimos ducimus error esse eum eveniet excepturi exercitationem maxime modi nam nesciunt, nostrum, odit optio perspiciatis praesentium, quae quasi ratione repudiandae sunt tempora vero voluptatibus. Alias autem debitis deserunt dolore eligendi, ex fugiat ipsa, iste maxime repellendus totam ullam vitae voluptas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam delectus esse, iste pariatur quas ratione? Accusantium architecto commodi consectetur delectus distinctio dolorem fuga fugit ipsa natus nemo odio quas qui, quia ratione sed sit, tempore voluptatibus. Architecto aspernatur, autem consequatur dignissimos dolorum et facilis fugiat illum laborum mollitia nobis non porro possimus quia quod, ratione reprehenderit ut velit vitae voluptatibus. Accusantium, architecto deleniti eius, eos excepturi itaque iusto libero nam nesciunt odit optio quam quis rem suscipit voluptatum. Aspernatur cumque deleniti distinctio dolor, dolorum eaque eius hic inventore ipsam labore libero nostrum numquam quod quos reprehenderit voluptates voluptatibus. Accusantium alias aliquam aliquid amet aperiam asperiores at autem consectetur consequuntur dignissimos ducimus error esse eum eveniet excepturi exercitationem maxime modi nam nesciunt, nostrum, odit optio perspiciatis praesentium, quae quasi ratione repudiandae sunt tempora vero voluptatibus. Alias autem debitis deserunt dolore eligendi, ex fugiat ipsa, iste maxime repellendus totam ullam vitae voluptas.';
  const textLength = text.length;
  const maxAllowedTextLength = 200;
  const onShowMoreButtonClick = (): void => setIsClickShowMoreText(!isClickShowMoreText);

  return (
    <div className={style.specificBlogDescription}>
      <div className={style.specificBlogDescription__previewPicture}>
        <ChoosePreviewPictureSVG />
      </div>
      <div className={style.specificBlogDescription__main}>
        <ChooseAvatarSVG className={style.specificBlogDescription__avatar} />
        <div className={style.specificBlogDescription__description}>
          <h3 className={style.specificBlogDescription__title}>TEST name</h3>
          <h6 className={style.specificBlogDescription__createdDate}>
            Blog creation date: 12.12.2022
          </h6>
          <h6 className={style.specificBlogDescription__url}>
            Website:<a href="test.com">YOUTUBE</a>
          </h6>
          <p className={style.specificBlogDescription__text}>
            {textLength > maxAllowedTextLength && !isClickShowMoreText
              ? cutString(text, maxAllowedTextLength)
              : text}
          </p>
          {textLength > maxAllowedTextLength && (
            <div className={style.specificBlogDescription__showMoreText}>
              <button
                className={style.specificBlogDescription__button}
                type="button"
                onClick={onShowMoreButtonClick}
              >
                {isClickShowMoreText ? 'hide text' : 'show more'}
              </button>
              {isClickShowMoreText ? <ArrowUP /> : <ArrowDown />}
            </div>
          )}
        </div>
      </div>
      <hr className={commonStyle.line} />
    </div>
  );
};
