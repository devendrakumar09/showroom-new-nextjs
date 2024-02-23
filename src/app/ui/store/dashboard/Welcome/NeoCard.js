import React from 'react'

const NeoCard = () => {
    return (
        <>
            <div class="container">
                <div class="components">

                    <div class="switch">
                        <div class="switch__1">
                            <input id="switch-1" type="checkbox" />
                                <label for="switch-1"></label>
                        </div>

                        <div class="switch__2">
                            <input id="switch-2" type="checkbox" checked />
                                <label for="switch-2"></label>
                        </div>
                    </div>

                    <div class="checkbox">
                        <div class="checkbox__1">
                            <input id="checkbox-1" type="checkbox" />
                                <label for="checkbox-1">
                                    <i class="material-icons">done</i></label>
                        </div>
                        <div class="checkbox__2">
                            <input id="checkbox-2" type="checkbox" checked />
                                <label for="checkbox-2">
                                    <i class="material-icons">done</i></label>
                        </div>
                    </div>

                    <div class="radio">
                        <div class="radio__1">
                            <input id="radio-1" type="radio" name="radio" value="1" />
                                <label for="radio-1"></label>
                        </div>

                        <div class="radio__2">
                            <input id="radio-2" type="radio" name="radio" value="2" checked />
                                <label for="radio-2"></label>
                        </div>
                    </div>

                    <div class="btn btn__primary"><p>Button</p></div>
                    <div class="btn btn__secondary"><p>Button</p></div>

                    <div class="clock">
                        <div class="hand hours"></div>
                        <div class="hand minutes"></div>
                        <div class="hand seconds"></div>
                        <div class="point"></div>
                        <div class="marker">
                            <span class="marker__1"></span>
                            <span class="marker__2"></span>
                            <span class="marker__3"></span>
                            <span class="marker__4"></span>
                        </div>
                    </div>

                    <div class="chip">
                        <div class="chip__icon">
                            <ion-icon name="color-palette"></ion-icon></div>
                        <p>Neumorphic Design</p>
                        <div class="chip__close">
                            <ion-icon name="close"></ion-icon>
                        </div>
                    </div>

                    <div class="circle">
                        <span class="circle__btn">
                            <ion-icon class="pause" name="pause"></ion-icon>
                            <ion-icon class="play" name="play"></ion-icon>
                        </span>
                        <span class="circle__back-1"></span>
                        <span class="circle__back-2"></span>
                    </div>

                    <div class="form">
                        <input type="text" class="form__input" placeholder="Type anything..." />
                    </div>

                    <div class="search">
                        <input type="text" class="search__input" placeholder="Search..." />
                            <div class="search__icon">
                                <ion-icon name="search"></ion-icon>
                            </div>
                    </div>

                    <div class="segmented-control">

                        <input type="radio" name="radio2" value="3" id="tab-1" checked />
                        <label for="tab-1" class="segmented-control__1">
                            <p>Tab 1</p></label>

                        <input type="radio" name="radio2" value="4" id="tab-2" />
                        <label for="tab-2" class="segmented-control__2">
                            <p>Tab 2</p></label>

                        <input type="radio" name="radio2" value="5" id="tab-3" />
                        <label for="tab-3" class="segmented-control__3">
                            <p>Tab 3</p></label>

                        <div class="segmented-control__color"></div>
                    </div>

                    <div class="icon">
                        <div class="icon__home">
                            <ion-icon name="home"></ion-icon></div>
                        <div class="icon__account">
                            <ion-icon name="person"></ion-icon></div>
                        <div class="icon__settings">
                            <ion-icon name="settings"></ion-icon></div>
                    </div>

                    <div class="slider">
                        <div class="slider__box">
                            <span class="slider__btn" id="find"></span>
                            <span class="slider__color"></span>
                            <span class="slider__tooltip">50%</span>
                        </div>
                    </div>
                </div>
                <a href="https://dribbble.com/myacode" class="dribbble" target="_blank"><ion-icon name="logo-dribbble"></ion-icon></a>
            </div>
        </>
    )
}

export default NeoCard