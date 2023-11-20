export const Collapse = ({collapsedLabel = 'expand', expandedLabel = 'collapse', onClickBtn, isCollapsed}) => {
  return (
    <div className="collapse">
     <div class="collapse__container">
        <button onClick={onClickBtn} type="button" class="collapse__btn">Collapse</button>
        <div class={`collapse__content collapse__content_${isCollapsed ? collapsedLabel : expandedLabel}`}>
          <p class="collapse__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquid, soluta doloribus velit tempore quos quo rerum veniam. 
            Eaque similique mollitia perspiciatis! Dolorem facere quo fuga cum? 
            Quis debitis culpa numquam.</p>
        </div>
      </div>
    </div>
  )
}
